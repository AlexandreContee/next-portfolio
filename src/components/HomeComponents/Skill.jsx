import Image from "next/image"

const Skill = ({ name, src, alt }) => {

  return (
  <>
    <Image width={50} height={50} src={src} alt={alt} />
    <li>{name}</li>
  </>
  )
}

export default Skill