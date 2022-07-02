import Image from "next/image"

import styles from "./CertificationItem.module.css"

const CertificationItem = ({ href, src, alt, description }) => {
  return (
    <li className={styles.item}>
      <a href={href} target="_blank" rel="noreferrer">
        <Image src={src} alt={alt} width={300} height={200} />
        <p>{description}</p>
      </a>
    </li>
  )
}

export default CertificationItem