import ProjectsItem from "./ProjectsItem";
import designs from "../pages/api/designs" assert { type: "JSON" };

const Projects = () => {
  const projectItems = [];

  for (let i = 0; i < designs.projects.length; i++) {
    const project = designs.projects[i];
    projectItems.push(
      <ProjectsItem
        key={project.id}
        imageUrl={project.visualisation[0]}
        object={project.description}
        meters={project.area}
      />
    );
  }

  return (
    <div className='app__projects' id='projects'>
      {projectItems}
    </div>
  );
};

export default Projects;
