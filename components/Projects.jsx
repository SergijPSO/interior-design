import ProjectsItem from './ProjectsItem';

const Projects = () => {
  return(
    <div className={['app__projects']}>
      <ProjectsItem image='project1.png' />
      <ProjectsItem image='project2.png' />
      <ProjectsItem image='project3.png' />
      <ProjectsItem image='project4.png' />
      <ProjectsItem image='project5.png'/>
      <ProjectsItem image='project6.png'/>
    </div>
  )
}

export default Projects;