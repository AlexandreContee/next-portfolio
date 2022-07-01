import Skill from "./Skill"

import java from "../../../public/images/skills/java.svg"
import python from "../../../public/images/skills/python.svg"
import html5 from "../../../public/images/skills/html5.svg"
import css3 from "../../../public/images/skills/css3.svg"
import javascript from "../../../public/images/skills/javascript.svg"
import typescript from "../../../public/images/skills/typescript.svg"
import angular from "../../../public/images/skills/angular.svg"
import reactjs from "../../../public/images/skills/reactjs.svg"
import nextjs from "../../../public/images/skills/nextjs.png"

const Skills = () => {
  return (
    <ul>
      <Skill name="Java" src={java} alt="Java" />
      <Skill name="Python" src={python} alt="" />
      <Skill name="HTML5" src={html5} alt="" />
      <Skill name="CSS3" src={css3} alt="" />
      <Skill name="JavaScript" src={javascript} alt="" />
      <Skill name="TypeScript" src={typescript} alt="" />
      <Skill name="ReactJs" src={reactjs} alt="" />
      <Skill name="ReactNative" src={reactjs} alt="" />
      <Skill name="Next.Js" src={nextjs} alt="" />
      <Skill name="Angular" src={angular} alt="" />
    </ul>
  )
}

export default Skills