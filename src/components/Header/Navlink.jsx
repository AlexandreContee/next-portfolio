import Link from "next/link"

import styles from "./Navlink.module.css"

const Navlink = ({ path, name }) => {
  return (
    <li className={styles.link}>
      <Link href={path}>
        <a>{name}</a>
      </Link>
    </li>
  )
}

export default Navlink