import CertificationItem from "./CertificationItem"

import ReactComponentImage from "../../../public/images/certifications/react-components.jpg"
import ReactIntroductionImage from "../../../public/images/certifications/react-introduction.jpg"
import JavaScriptMethods from "../../../public/images/certifications/map-filter-reduce.jpg"
import JavaScriptDebuggingAndErrors from "../../../public/images/certifications/javascript-debugging-errors.jpg"
import jsdom from "../../../public/images/certifications/js-dom.jpg"
import asyncjs from "../../../public/images/certifications/asyncjs.jpg"
import js from "../../../public/images/certifications/javascript.jpg"
import oop from "../../../public/images/certifications/oop.jpg"
import java from "../../../public/images/certifications/java.jpg"
import jspro from "../../../public/images/certifications/js-pro.jpg"
import startjs from "../../../public/images/certifications/startjs.jpg"
import datastructure from "../../../public/images/certifications/data-structure.jpg"
import web from "../../../public/images/certifications/web.jpg"
import back from "../../../public/images/certifications/back.jpg"

import styles from "./Certifications.module.css"

const Certifications = () => {
  return (
    <div className={styles.certification}>
      <h2>Certifications</h2>
      <ul>
        <CertificationItem href="https://www.dio.me/certificate/F584CC32/share" src={ReactComponentImage} alt="React Componentization certification" description="React Componentization" />
        <CertificationItem href="https://www.dio.me/certificate/529A0693/share" src={ReactIntroductionImage} alt="React Introduction certification" description="React Introduction" />
        <CertificationItem href="https://www.dio.me/certificate/B42127E4/share" src={JavaScriptMethods} alt="JavaScript Map, filter and reduce certification" description="JavaScript: Map, filter and reduce methods" />
        <CertificationItem href="https://www.dio.me/certificate/65F5C2AA/share" src={JavaScriptDebuggingAndErrors} alt="JavaScript Debugging and Error Handling certification" description="JavaScript: Debugging and Error handling" />
        <CertificationItem href="https://www.dio.me/certificate/D87182F1/share" src={jsdom} alt="JavaScript: DOM Manipulation certification" description="JavaScript: Manipulating the DOM" />
        <CertificationItem href="https://www.dio.me/certificate/5DDE0852/share" src={asyncjs} alt="Async JavaScript certification" description="Async JavaScript" />
        <CertificationItem href="https://www.dio.me/certificate/BB1F110D/share" src={js} alt="JavaScript certification" description="JavaScript" />
        <CertificationItem href="https://www.dio.me/certificate/80508F95/share" src={oop} alt="JavaScript OOP" description="JavaScript Object Oriented Programming" />
        <CertificationItem href="https://www.udemy.com/certificate/UC-19010ef0-77d9-4873-ae6e-a1b4befa5bb6/" src={java} alt="Java: Programming logic certification" description="Java programming logic" />
        <CertificationItem href="https://proway.evolke.com.br/autoria/autoria/cert_imp.php?key=cb5f22472a905a9d322e1cd99e875076" src={jspro} alt="Advanced JavaScript certification" description="Advanced JavaScript" />
        <CertificationItem href="https://app.staart.com/profile/certificates/f8dc79cc-ae72-4585-b629-9dc6b97dda8a" src={startjs} alt="First Lines of JavaScript code" description="JavaScript first lines" />
        <CertificationItem href="https://app.staart.com/profile/certificates/edc54e0b-f451-43af-bff5-c61c3e8afdd8" src={datastructure} alt="JavaScript data structure" description="JavaScript Data Structures" />
        <CertificationItem href="https://app.staart.com/profile/certificates/4937b101-35a3-4198-98e0-8b6378f58229" src={web} alt="Deconstructing the web" description="Deconstructing the web" />
        <CertificationItem href="https://app.staart.com/profile/certificates/cb42842d-c0b8-4c55-a532-0b5dd3cd355f" src={back} alt="Back-End from scratch" description="Back-End from scratch" />
      </ul>
    </div>
  )
}

export default Certifications