import MainCarousel from './MainCarousel';
import Projects from './Projects';

const ProjectsSection = (props) => {
  return (
    <section className={ `app__section${props.modifier}`}>
      <MainCarousel />
      <Projects />
    </section>
  ) 
}

export default ProjectsSection;