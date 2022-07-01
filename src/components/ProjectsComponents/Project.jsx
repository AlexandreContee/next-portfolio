import Image from "next/image"

const Project = ({ src, alt, description }) => {
  return (
    <li>
      <Image src={src} alt={alt}/>
      <p>{description}</p>
    </li>
  )
}

export default Project