import React from 'react';
import Link from 'next/link';

import { urlFor } from '@/lib/client';
import Image from 'next/image';

const Product = ( {product: { image, name, name2, name3, slug, price }}) => {
  return (
    <Link href = {`/product/${slug.current}`} className='product-card'>
      <img
        src={urlFor( image && image[0])}
        width={250}
        height={250}
        className="product-image"
        alt="product-image"
      />
      <div className='product-info'>
        <p className='product-name'>{name}</p>
        <p className='product-name3'>{name3}</p>
        <p className='product-name2'>{name2}</p>
        <p className='product-price'>{price}€</p>
      </div>
    </Link>
  )
}


export default Product