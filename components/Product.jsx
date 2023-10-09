import React from 'react';
import Link from 'next/link';

import { urlFor } from '@/lib/client';
import Image from 'next/image';

const Product = ( {product: { image, name, name2, slug, price }}) => {
  return (
    <div>
      <Link href = {`/product/${slug.current}`}>
        <div className='product-card'>
          <img 
            src={urlFor( image && image[0])}  
            width={250}
            height={250}
            className="product-image"
            alt="product-image"
          />
            <p className='product-name'>{name}</p>
            <p className='product-name2'>{name2}</p>
            <p className='product-price'>{price}€</p>
        </div>
      </Link>
    </div>
  )
}


export default Product