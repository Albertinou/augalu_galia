import React from 'react';
import { client } from '@/lib/client';
import { Product, FooterBanner, HeroBanner } from  "../components"

const Home = ({ products, bannerData, announcement }) => {
  const sortedProducts = products?.slice().sort((a, b) => a.order - b.order) ?? [];
  const mainProducts = sortedProducts.filter((product) => (product.category ?? 'main') === 'main');
  const alsoProducts = sortedProducts.filter((product) => product.category === 'also');

  return (
    <>
        <HeroBanner heroBanner={bannerData.length && bannerData[0]} />

        {announcement?.message && (
          <div className='products-heading'>
            {announcement.message.split('\n').map((line, i) => (
              <h2 key={i}>{line}</h2>
            ))}
          </div>
        )}

        <div className='products-heading'>
          <h2>Gamtos galia</h2>
        </div>
        <div className='products-container'>
          {mainProducts.map((product)=><Product key={product._id} product={product} />)}
        </div>

        {alsoProducts.length > 0 && (
          <>
            <div className='products-heading'>
              <h2>Dar daugiau iš gamtos</h2>
            </div>
            <div className='products-container'>
              {alsoProducts.map((product)=><Product key={product._id} product={product} />)}
            </div>
          </>
        )}

        <FooterBanner footerBanner= {bannerData && bannerData[0]} />
    </>
  )
}


export const getServerSideProps = async() =>  {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  const announcementQuery = '*[_type == "announcement" && active == true][0]';
  const announcement = await client.fetch(announcementQuery);

  return {
    props: { products, bannerData, announcement: announcement ?? null },
  }
}

export default Home;