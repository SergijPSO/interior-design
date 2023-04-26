import GalleryCollection from "@/components/GalleryCollection";
import Layout from "@/components/Layout";
import Header from "@/components/Header";
import HeaderMobile from "@/components/HeaderMobile";
import { useState, useEffect } from "react";

const Gallery = () => {
  const [screenWidth, setScreenWidth] = useState(0);

  function updateWidth() {
    setScreenWidth(window.innerWidth);
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      setScreenWidth(window.innerWidth);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("resize", updateWidth);
      return () => {
        window.removeEventListener("resize", updateWidth);
      };
    }
  }, []);

  return (
    <Layout pageTitle='Козловська Аріна Дизайнер інтер`єру'>
      <div className='app__wrapper'>
        {screenWidth <= 1024 ? <HeaderMobile /> : <Header />}
        <GalleryCollection />
      </div>
    </Layout>
  );
};

export default Gallery;
