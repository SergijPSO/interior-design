import ProjectsSection from '../components/ProjectsSection';
import MainCarousel from '../components/MainCarousel';
import Projects from '../components/Projects';
import About from './About';
import Services from './Services';

const Main = () => {
  return(
    <main className="app__content">
      
      <ProjectsSection modifier={"--common"}>
        <MainCarousel />
        <Projects />
      </ProjectsSection>

      <ProjectsSection modifier={"--swampy"}>
        <Services />
      </ProjectsSection>

      <ProjectsSection modifier={"--sandy"}>
        <About />
      </ProjectsSection>

    </main>
  )
}

export default Main;