import ProjectsSection from '../components/ProjectsSection';
import MainCarousel from '../components/MainCarousel';
import Projects from '../components/Projects';

const Main = () => {
  return(
    <main className='app__content'>
      {/* <ProjectsSection modifier={'--swampy'}>
        <MainCarousel />
        <Projects />
      </ProjectsSection> */}
      <ProjectsSection/>      
    </main>
  )
}

export default Main;