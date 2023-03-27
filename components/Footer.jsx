import React from 'react';
import { AiFillInstagram, AiFillFacebook } from 'react-icons/ai';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className='footer-container'>
      <p>2023 Augalų galia </p>
      <p className='icons'>
        
        {/*    <AiFillInstagram />     */}
        <Link href='https://www.facebook.com/augalugalia' target='_blank'>
          <AiFillFacebook />
        </Link>
        
      </p>
    </div>
  )
}

export default Footer