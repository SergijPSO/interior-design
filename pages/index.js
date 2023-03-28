import Layout from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Main from '../components/Main';
import HeaderMobile from '@/components/HeaderMobile';
import { BrowserRouter } from 'react-router-dom';

import {useState, useEffect} from 'react';

const Home = () => {
  const [screenWidth, setScreenWidth] = useState(0);

  function updateWidth() {
    setScreenWidth(window.innerWidth);
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
    window.addEventListener('resize', updateWidth);
      return () => {
        window.removeEventListener('resize', updateWidth);
      };
    }
  }, []);

  return (
    <Layout pageTitle='Interior design'>
      <div className='app__wrapper'> 
        { screenWidth <= 1024 ? <HeaderMobile/> : <Header/> }
        <Main/>
        <Footer/>
      </div>
    </Layout>
  )
}

export default Home;