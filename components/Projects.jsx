import ProjectsItem from "./ProjectsItem";

const Projects = () => {
  return(
    <div className="app__projects" id="projects">
      <ProjectsItem image={"project2.png"} object={"Дво кімнатна кватрира"} meters={"72 кв.м."}/>
      <ProjectsItem image={"project2.png"} object={"Будинок Пасіки-Зубрицькі"} meters={"2500 кв.м."}/>
      <ProjectsItem image={"project2.png"} object={"Будинок Пасіки-Зубрицькі"} meters={"100 кв.м."}/>
      <ProjectsItem image={"project2.png"} object={"Будинок Пасіки-Зубрицькі"} meters={"70 кв.м."}/>
      <ProjectsItem image={"project2.png"} object={"Будинок Пасіки-Зубрицькі"} meters={"64 кв.м."}/>
      <ProjectsItem image={"project2.png"} object={"Будинок Пасіки-Зубрицькі"} meters={"20 кв.м."}/>
    </div>
  )
}

export default Projects;