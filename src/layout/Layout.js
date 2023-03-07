import Head from 'next/head';
import React from 'react';
import Footer from './Footer';
import Header from './Header';
import { motion } from 'framer-motion';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>HRF&D</title>
        <meta
          name='description'
          content='Building Experiences for Industries'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 0.5,
          //   type: 'spring',
          //   stiffness: 260,
          //   damping: 20,
        }}
      >
        {children}
      </motion.main>
      <Footer />
    </>
  );
};

export default Layout;
