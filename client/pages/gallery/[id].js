import Layout from "@/components/Layout";
import Header from "@/components/Header";
import HeaderMobile from "@/components/HeaderMobile";
import GalleryTabs from "@/components/GalleryTabs";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
export async function getServerSideProps({ params }) {
  try {
    const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001';
    const res = await fetch(`${API_URL}/api/projects/${params.id}`);
    if (!res.ok) {
      return {
        props: {
          selectedProject: {},
        },
      };
    }
    const selectedProject = await res.json();
    return {
      props: {
        selectedProject: selectedProject || {},
      },
    };
  } catch (err) {
    console.error('Error fetching project from API:', err);
    return {
      props: {
        selectedProject: {},
      },
    };
  }
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
