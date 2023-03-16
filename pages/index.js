import { Inter } from 'next/font/google';
import variables from '@/styles/scss/variables.module.scss';

import Layout from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Main from '../components/Main';
import HeaderMobile from '@/components/HeaderMobile';

import {useLayoutEffect, useState} from 'react';

const Home = () => {
  const [screenWidth, setScreenWidth] = useState(0);

  useLayoutEffect(() => {
    function updateWidth() {
      setScreenWidth(window.innerWidth);
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', updateWidth);
      return () => {
        window.removeEventListener('resize', updateWidth);
      };
    }
  }, []);

  return (
    <Layout pageTitle='Interior design'>
      <div className='app-wrapper'> 
        {screenWidth <= 1024 ? <HeaderMobile/> : <Header />}
        <Main/>
        <Footer/>
      </div>

    </Layout>
  )
}

export default Home;