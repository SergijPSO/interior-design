import ProjectsItem from "./ProjectsItem";
import designs from "../public/data/designs.json";
import { useRouter } from "next/router";

const Projects = () => {
  const router = useRouter();

  return (
    <div className='app__projects' id='projects'>
      {designs.projects.map((project) => (
        <ProjectsItem
          key={project.id}
          imageUrl={project.visualisation[0]}
          object={project.description}
          meters={project.area}
          onClick={() => {
            router.push(`/gallery/${project.id}`);
          }}
        />
      ))}
    </div>
  );
};

export default Projects;
