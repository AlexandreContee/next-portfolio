import Image from "next/image"
import styles from "./Skill.module.css"

const Skill = ({ name, src, alt }) => {
  return (
  <li className={styles.skills}>
    <Image width={50} height={50} src={src} alt={alt} />
    <p>{name}</p>
  </li>
  )
}

export default Skill