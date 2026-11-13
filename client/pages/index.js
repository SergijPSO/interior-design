import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Main from "@/components/Main";
import HeaderMobile from "@/components/HeaderMobile";
import useScreenWidth from "../hooks/useScreenWidth.js";
import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();
  const screenWidth = useScreenWidth();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleHashScroll = () => {
      const scrollTarget = sessionStorage.getItem('scrollTarget');
      if (scrollTarget) {
        sessionStorage.removeItem('scrollTarget');
        if (scrollTarget === 'top') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }
        const scrollToElement = (retries = 20) => {
          const el = document.getElementById(scrollTarget);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          } else if (retries > 0) {
            setTimeout(() => scrollToElement(retries - 1), 150);
          }
        };
        scrollToElement();
        return;
      }

      if (window.location.hash) {
        const id = window.location.hash.substring(1);
        const scrollToElement = (retries = 20) => {
          const el = document.getElementById(id);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          } else if (retries > 0) {
            setTimeout(() => scrollToElement(retries - 1), 150);
          }
        };
        scrollToElement();
      }
    };

    handleHashScroll();
    router.events.on('routeChangeComplete', handleHashScroll);
    return () => {
      router.events.off('routeChangeComplete', handleHashScroll);
    };
  }, [router]);

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
