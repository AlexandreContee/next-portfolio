import ProjectsUl from "./ProjectsUl"

import styles from "./Projects.module.css"

const Projects = () => {
  return (
    <div className={styles.projects}>
      <h2>Personal Projects</h2>
      <ProjectsUl />
    </div>
  )
}

export default Projects