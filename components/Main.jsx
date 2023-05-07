import ProjectsSection from "../components/ProjectsSection";
import MainCarousel from "../components/MainCarousel";
import Projects from "../components/Projects";
import About from "./About";
import Prices from "./Prices";
import StickyContacts from "./StickyContacts";
import useScreenWidth from "../hooks/useScreenWidth.js";

const Main = () => {
  const screenWidth = useScreenWidth();

  return (
    <main className='app__content'>
      <ProjectsSection modifier={"--common"}>
        {screenWidth <= 1024 ? (
          <div>
            <img
              src='/assets/images/designs/project2/realization/3.jpg'
              
              alt='mobile background'
              className='app__content-mobile__background'
            />
          </div>
        ) : (
          <MainCarousel />
        )}
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
