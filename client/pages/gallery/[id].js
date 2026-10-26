import Layout from "@/components/Layout";
import Header from "@/components/Header";
import HeaderMobile from "@/components/HeaderMobile";
import GalleryTabs from "@/components/GalleryTabs";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import projectsData from "../../public/data/designs.json";

export async function getServerSideProps({ params }) {
  const selectedProject = projectsData.projects.find(p => p.id === params.id) || null;

  return {
    props: {
      selectedProject: selectedProject || {},
    },
  };
}

const Gallery = ({ selectedProject }) => {
  const router = useRouter();
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
        <section className='app__collection'>
          <GalleryTabs project={selectedProject} />
        </section>
      </div>
    </Layout>
  );
};

export default Gallery;
