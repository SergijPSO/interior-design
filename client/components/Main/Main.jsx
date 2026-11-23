import ProjectsSection from "@/components/ProjectsSection/ProjectsSection";
import MainCarousel from "@/components/MainCarousel/MainCarousel";
import Projects from "@/components/Projects/Projects";
import About from "@/components/About/About";
import Prices from "@/components/Prices/Prices";
import StickyContacts from "@/components/StickyContacts/StickyContacts";
import useScreenWidth from "@/hooks/useScreenWidth";
import { useState, useEffect } from "react";


const Main = () => {
  const screenWidth = useScreenWidth();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main className='app__content'>
      <ProjectsSection modifier={"--common"}>
        {mounted && (screenWidth <= 1024 ? (
          <div>
            <img
              src='/assets/images/designs/project2/visualisation/3.jpg'

              alt='mobile background'
              className='app__content-mobile__background'
            />
          </div>
        ) : (
          <MainCarousel />
        ))}
        <Projects />
      </ProjectsSection>

      <ProjectsSection modifier={"--swampy"}>
        <Prices />
      </ProjectsSection>

      <ProjectsSection modifier={"--sandy"}>
        <About />
      </ProjectsSection>

      <StickyContacts />
    </main>
  );
};

export default Main;
