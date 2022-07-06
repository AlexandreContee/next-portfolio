import Image from "next/image"

const Contact = ({ href, src, alt, description}) => {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      <Image src={src} width={30} height={30} alt={alt} />
      <p>{description}</p>
    </a>
  )
}

export default Contact