import Image from "next/image"

import styles from "./Project.module.css"

const Project = ({ src, alt, description, href }) => {
  return (
    <a className={styles.project} href={href} rel="noreferrer" target="_blank">
      <li>
        <Image height={300} width={300} className={styles.img} src={src} alt={alt}/>
        <p>{description}</p>
      </li>
    </a>
  )
}

export default Project