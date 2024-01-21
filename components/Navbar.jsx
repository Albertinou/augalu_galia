import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from "react-icons/ai"

import { Cart } from './'
import { useStateContext } from '@/context/StateContext';
import Image from 'next/image';
const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  return (
    <div className='navbar-container'>
      <Link href="/">
        <Image alt='logo' src={'/images/augalu_galia_logo.png'} width={150} height={86} />
      </Link>
      <button type='button'
        className='cart-icon'
        onClick={() => setShowCart(true)}>
        <AiOutlineShopping />
        <span className='cart-item-qty'>{totalQuantities}</span>
      </button>

      {showCart && <Cart />}

    </div>
  )
}

export default Navbar