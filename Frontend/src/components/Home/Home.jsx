import React from 'react'
import Navbar from '../Navbar';
import Banner from '../Banner';
import FreeBook from '../FreeBook';
import Footer from '../Footer';

function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Banner/>
      <FreeBook />
      <Footer />
    </>
  );
}

export default Home
