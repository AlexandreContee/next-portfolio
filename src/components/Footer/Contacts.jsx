import styles from "./Contacts.module.css"
import Image from "next/image"

import linkedInIcon from "../../../public/images/contacts/linkedin.svg"
import githubIcon from "../../../public/images/contacts/github.svg"
import gmailIcon from "../../../public/images/contacts/gmail.svg"

const Contacts = () => {
  return (
    <div className={styles.contacts}>
      <li>
        <a href="https://www.linkedin.com/in/alexandreconteprog/">
          <Image src={linkedInIcon} width={30} height={30} alt="LinkedIn link" />
          <p>LinkedIn</p>
        </a>
      </li>
      <li>
        <a href="https://github.com/AlexandreContee">
          <Image src={githubIcon} width={30} height={30} alt="Github link" />
          <p>GitHub</p>
        </a>
      </li>
      <li>
        <a href="mailto:alexandre.conte10@gmail.com">
          <Image src={gmailIcon} width={30} height={30} alt="Gmail link" />
          <p>Gmail</p>
        </a>
      </li>
    </div>
  )
}

export default Contacts