import ProjectsItem from "./ProjectsItem";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Projects = () => {
  const router = useRouter();
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('/data/designs.json')
      .then(res => res.json())
      .then(data => {
        console.log('Fetched projects data:', data);
        if (data && Array.isArray(data.projects)) {
          setProjects(data.projects);
        } else if (Array.isArray(data)) {
          setProjects(data);
        }
      })
      .catch(err => console.error('Error fetching projects:', err));
  }, []);

  return (
    <div className='app__projects' id='projects'>
      {Array.isArray(projects) && projects.map((project) => (
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
