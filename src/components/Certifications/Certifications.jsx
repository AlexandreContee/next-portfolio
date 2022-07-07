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
import front from "../../../public/images/certifications/frontend.jpg"
import jsFundamentals from "../../../public/images/certifications/js-fundamentals.jpg"
import vscode from "../../../public/images/certifications/vscode.jpg"
import fsite from "../../../public/images/certifications/fsite.jpg"

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
        <CertificationItem href="https://assets.staart.com/app/_k/33f218a3-34e3-4257-9b3c-eab56572d2e5/323ae098-1624-4e24-8607-1f3a04718b11-496ce1bb-9dfc-48fa-91d7-db6bb375584b.pdf" src={startjs} alt="First Lines of JavaScript code" description="JavaScript first lines" />
        <CertificationItem href="https://assets.staart.com/app/_k/33f218a3-34e3-4257-9b3c-eab56572d2e5/a69ee6be-b292-4cb9-a9a5-36481689a800-496ce1bb-9dfc-48fa-91d7-db6bb375584b.pdf" src={datastructure} alt="JavaScript data structure" description="JavaScript Data Structures" />
        <CertificationItem href="https://assets.staart.com/app/_k/33f218a3-34e3-4257-9b3c-eab56572d2e5/468dbdd9-66bf-48ed-91fa-3dfdec5fba4e-496ce1bb-9dfc-48fa-91d7-db6bb375584b.pdf" src={web} alt="Deconstructing the web" description="Deconstructing the web" />
        <CertificationItem href="https://assets.staart.com/app/_k/33f218a3-34e3-4257-9b3c-eab56572d2e5/23856860-f5b9-4b71-a92f-546902b8348c-496ce1bb-9dfc-48fa-91d7-db6bb375584b.pdf" src={back} alt="Back-End from scratch" description="Back-End from scratch" />
        <CertificationItem href="https://assets.staart.com/app/_k/33f218a3-34e3-4257-9b3c-eab56572d2e5/19a31b7a-1286-4927-830e-564cbcd54a23-496ce1bb-9dfc-48fa-91d7-db6bb375584b.pdf" src={front} alt="Front-End from scratch" description="Front-End from scratch" />
        <CertificationItem href="https://assets.staart.com/app/_k/33f218a3-34e3-4257-9b3c-eab56572d2e5/2b7e134e-87c3-40fb-885e-2fd438c9d4ea-496ce1bb-9dfc-48fa-91d7-db6bb375584b.pdf" src={jsFundamentals} alt="JavaScript Fundamentals" description="JavaScript Fundamentals" />
        <CertificationItem href="https://assets.staart.com/app/_k/33f218a3-34e3-4257-9b3c-eab56572d2e5/1a99deef-b707-4431-ae13-22a82c9b94eb-496ce1bb-9dfc-48fa-91d7-db6bb375584b.pdf" src={vscode} alt="vs-code environment" description="Visual Studio Code Environment" />
        <CertificationItem href="https://assets.staart.com/app/_k/33f218a3-34e3-4257-9b3c-eab56572d2e5/4ffd086c-868f-44d1-9f7f-3adf8d7edcc4-496ce1bb-9dfc-48fa-91d7-db6bb375584b.pdf" src={fsite} alt="Building the first HTML and CSS website" description="HTML and CSS" />
      </ul>
    </div>
  )
}

export default Certifications