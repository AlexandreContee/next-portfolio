import Project from "./Project"

import catProject from "../../../public/images/projects/cat-api.png"
import dogProject from "../../../public/images/projects/dog-api.png"
import cepProject from "../../../public/images/projects/cep-api.png"

const ProjectsUl = () => {
  return (
    <ul>
      <Project src={catProject} alt="cat project api" />
      <Project src={dogProject} alt="dog project api" />
      <Project src={cepProject} alt="cep project api" />
    </ul>
  )
}

export default ProjectsUl