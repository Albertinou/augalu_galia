import React from 'react'
import Link from 'next/link'

import { urlFor } from '@/lib/client'

const HeroBanner = ({ heroBanner }) => {
  return (
    <div className='hero-banner-container'>
        <div>
            <p className='beats-solo'>{ heroBanner.smallTextTop }</p>
            <h3> {heroBanner.midTextTop} </h3>
            <h1> {heroBanner.largeText1Top}</h1>
            <h6> {heroBanner.largeText2Top}</h6>
            <img src={urlFor(heroBanner.image_top)} alt="chaga_natural" className='hero-banner-image' />
            <div>
                <Link href={`/product/${heroBanner.product}`}>
                    <button type='button'>{heroBanner.buttonText}</button>
                </Link>
                {/* <div className='desc'>
                    <h5>Akcija taikoma:</h5>
                    <p>{heroBanner.desc}</p>
                </div> */}
            </div>
        </div>
    </div>
  )
} 

export default HeroBanner