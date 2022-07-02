import Project from "./Project"

import catProject from "../../../public/images/projects/cat-api.png"
import dogProject from "../../../public/images/projects/dog-api.png"
import cepProject from "../../../public/images/projects/cep-api.png"

import styles from "./ProjectsUl.module.css"

const ProjectsUl = () => {
  return (
    <ul className={styles.projects}>
      <Project src={catProject} alt="cat project api" description="A JavaScript project made with the cat API" href="https://alexandrecontee.github.io/catApi/" />
      <Project src={dogProject} alt="dog project api" description="A JavaScript project made with the dog API" href="https://alexandrecontee.github.io/DogApi/" />
      <Project src={cepProject} alt="cep project api" description="A JavaScript project made with the CEP API" href="https://alexandrecontee.github.io/CEP/" />
    </ul>
  )
}

export default ProjectsUl