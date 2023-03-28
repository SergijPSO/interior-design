
const ProjectsItem = (props) => {
  return(
    <div className={"app__projects__item"}>

      <img
        className={"app__projects__item-image"} 
        src={`/assets/images/projects/${props.image}`}
      />

      <div className="app__projects__item__overlay">
        <div className="app__projects__item__overlay-inner">
          <div className="app__projects__item__overlay-info">
            <span className="app__projects__item__overlay-info__object">{props.object}</span>
            <span className="app__projects__item__overlay-info__meters">{props.meters}</span>    
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectsItem;