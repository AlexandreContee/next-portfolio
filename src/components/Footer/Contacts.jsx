import styles from "./Contacts.module.css"

import linkedInIcon from "../../../public/images/contacts/linkedin.svg"
import githubIcon from "../../../public/images/contacts/github.svg"
import gmailIcon from "../../../public/images/contacts/gmail.svg"
import Contact from "./Contact"

const Contacts = () => {
  return (
    <div className={styles.contacts}>
      <li>
        <Contact href="https://www.linkedin.com/in/alexandreconteprog/" src={linkedInIcon} alt={"LinkedIn link"} description={"LinkedIn"} />
      </li>
      <li>
        <Contact href="https://github.com/AlexandreContee" src={githubIcon} alt={"Github link"} description={"GitHub"} />
      </li>
      <li>
        <Contact href="mailto:alexandre.conte10@gmail.com" src={gmailIcon} alt={"Gmail link"} description={"Gmail"} />
      </li>
    </div>
  )
}

export default Contacts