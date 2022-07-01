import Link from "next/link"

const Navlink = ({ path, name }) => {
  return (
    <li>
      <Link href={path}>
        <a>{name}</a>
      </Link>
    </li>
  )
}

export default Navlink