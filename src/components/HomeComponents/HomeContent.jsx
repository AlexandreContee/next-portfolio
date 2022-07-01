import Image from "next/image"
import profile from "../../../public/images/me.jpeg"

const HomeContent = () => {
  return (
    <div>
      <h1>
        Alexandre Conte
        <span>Developer</span>
      </h1>
      <Image src={profile} alt="Alexandre Conte Developer" width={300} height={300} />
    </div>
  )
}

export default HomeContent