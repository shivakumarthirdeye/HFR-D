import Head from 'next/head';
import React from 'react';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children, dark }) => {
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
      <Header dark={dark} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
