import HeaderNavlinks from "./HeaderNavlinks"

import styles from "./Header.module.css"

const Header = () => {
  return (
    <nav className={styles.navbar}>
      <HeaderNavlinks />
    </nav>
  )
}

export default Header