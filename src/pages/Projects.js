import React from "react";
import ProjectItem from "./ProjectItem";
import { ProjectList } from '../helpers/ProjectList';

import '../styles/Projects.css';

function Projects() {
  return (
    <div className="projects">
      <h1>Meus Projetos Pessoais</h1>
      <div className="projectList">
        {/* <ProjectItem name="Project 1" image={Proj1} />
        <ProjectItem name='Project 2' image={Proj2} /> */}
        {ProjectList.map((project, idx) => {
          return <ProjectItem id={idx} name={project.name} image={project.image} />
        })}
      </div>

    </div>
  )
}

export default Projects;