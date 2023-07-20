import React from 'react';
import { client } from '@/lib/client';
import { Product, FooterBanner, HeroBanner } from  "../components"

const Home = ({ products, bannerData }) => {
  return (
    <>
        <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
        <div className='products-heading'>
          <h2>Mūsų prekės</h2>
          {/* <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p> */}
        </div>
        <div className='products-container'>
       
                   
          {products?.sort((a,b) => a.order - b.order).map((product)=><Product key={product._id} 
          product={product} />)}

          
        </div>

        <FooterBanner footerBanner= {bannerData && bannerData[0]} />
    </>
  )
}


export const getServerSideProps = async() =>  {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);
 
  return {
    props: { products, bannerData},
  }
}

export default Home;