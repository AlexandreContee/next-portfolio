import Image from "next/image"
import profile from "../../../public/images/me.jpeg"

import styles from "./HomeContent.module.css"

const HomeContent = () => {
  return (
    <div className={styles.info}>
      <h1>
        Alexandre Conte
        <span>Developer</span>
      </h1>
      <Image id={styles.img} src={profile} alt="Alexandre Conte Developer" width={300} height={300} />
    </div>
  )
}

export default HomeContent