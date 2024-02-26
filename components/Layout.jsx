
import React from 'react';
import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';

export const metadata = {
  title: {
    default: "Augalų galia",
    template: "%s | Augalų galia" 
  },
  description: 'Augalų galia'
}

const Layout = ({ children }) => {
  return (
    <div className='layout'>
      <Head>
        <title>Augalų galia</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main className='main-container'>
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Layout