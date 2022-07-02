import Navlink from "./Navlink"

import styles from "./HeaderNavlinks.module.css"

const HeaderNavlinks = () => {
  return (
    <ul className={styles.navbar}>
      <Navlink path="/" name="Home" />
      <Navlink path="/certifications" name="Certifications" />
      <Navlink path="/projects" name="Projects" />
    </ul>
  )
}

export default HeaderNavlinks