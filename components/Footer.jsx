import React from 'react';
import { AiFillInstagram, AiFillFacebook, AiOutlineMobile, AiOutlineMail } from 'react-icons/ai';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className='footer-container'>
      <p> <AiOutlineMail/> aidasgalkus@gmail.com &emsp;<AiOutlineMobile />+370 698 21253</p>
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