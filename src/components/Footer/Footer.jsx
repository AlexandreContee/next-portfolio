import Contacts from "./Contacts"

import styles from "./Footer.module.css"

const Footer = () => {
  return (
    <div className={styles.footer}>
      <h2>Contact Me</h2>
      <ul>
        <Contacts />
      </ul>
    </div>
  )
}

export default Footer