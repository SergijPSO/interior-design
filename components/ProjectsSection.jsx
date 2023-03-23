
const ProjectsSection = (props) => {
  return (
    <section className={ `app__section app__section${props.modifier}`}>
      {props.children}
    </section>
  )   
}

export default ProjectsSection;