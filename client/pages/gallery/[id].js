import Layout from "@/components/Layout";
import Header from "@/components/Header";
import HeaderMobile from "@/components/HeaderMobile";
import GalleryTabs from "@/components/GalleryTabs";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import useScreenWidth from "../../hooks/useScreenWidth";

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
  const screenWidth = useScreenWidth();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Layout pageTitle={`${selectedProject?.description || 'Проєкт'} | Аріна Козловська Дизайнер інтер'єру`}>
      <div className='app__wrapper'>
        {mounted && (screenWidth <= 1024 ? <HeaderMobile /> : <Header />)}
        
        {/* Breadcrumbs Navigation */}
        <div className="app__breadcrumbs">
          <div className="app__breadcrumbs__inner">
            <a href="/" className="app__breadcrumbs__link">Головна</a>
            <span className="app__breadcrumbs__separator">/</span>
            <span className="app__breadcrumbs__current">
              {selectedProject?.description || selectedProject?.id || 'Деталі проєкту'}
            </span>
          </div>
        </div>

        <section className='app__collection'>
          <GalleryTabs project={selectedProject} />
        </section>
      </div>
    </Layout>
  );
};

export default Gallery;
