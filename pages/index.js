import { Inter } from 'next/font/google';
import variables from '@/styles/scss/variables.module.scss';

import Layout from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Main from '../components/Main';

const inter = Inter({ subsets: ['latin'] })

const Home = () => {
  return (
    <Layout pageTitle='Interior design'>
      <div className='app-wrapper'>
        <Header />
        <Main/>
        {/* <h1 className={variables['app-title']}> */}
        <Footer/>
      </div>

    </Layout>
  )
}

export default Home;