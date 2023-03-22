
const ProjectsItem = (props) => {
  return(
    <div className={['app__projects__item']}>
      <img
        className={['app__projects__item-image']} 
        src={`/assets/images/projects/${props.image}`}
      />
    </div>
  )
}

export default ProjectsItem;