// import { Menu } from 'lucide-react'
import { useId } from 'react'

type NavLinksTypes = {
  navLinks: string[]
}

export const Nav = ({ navLinks }: NavLinksTypes) => {
  // const [isOpen, setIsOpen] = useState<boolean>()

  const id = useId()

  return (
    <nav>
      {/* <Menu /> */}

      <ul className="flex gap-4">
        {navLinks.map((navLink: string) => {
          return (
            <li
              key={id}
              className="text-xl text-white hover:text-white/90 transition"
            >
              <a href={`/${navLink.toLowerCase()}`}>{navLink}</a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
