import Navlink from "./Navlink"

const HeaderNavlinks = () => {
  return (
    <ul>
      <Navlink path="/" name="Home" />
      <Navlink path="/certifications" name="Certifications" />
      <Navlink path="/projects" name="Projects" />
    </ul>
  )
}

export default HeaderNavlinks