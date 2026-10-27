import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Main from "@/components/Main";
import HeaderMobile from "@/components/HeaderMobile";
import useScreenWidth from "../hooks/useScreenWidth.js";

const Home = () => {
  const screenWidth = useScreenWidth();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Layout pageTitle='Аріна Козловська Дизайнер інтерє`ру'>
      <div className='app__wrapper'>
        {mounted && (screenWidth <= 1024 ? <HeaderMobile /> : <Header />)}
        <Main />
        <Footer />
      </div>
    </Layout>
  );
};

export default Home;
