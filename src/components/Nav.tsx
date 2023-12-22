// import { Menu } from 'lucide-react'
import { useId } from 'react'

type NavLinksTypes = {
  navLinks: string[]
  activeItem: string
}

export const Nav = ({ navLinks, activeItem }: NavLinksTypes) => {
  // const [isOpen, setIsOpen] = useState<boolean>()
  const id = useId()
  const pathname = activeItem.replace('/', '')

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
              <a
                href={`/${navLink.toLowerCase()}`}
                className={
                  pathname === navLink.toLowerCase() ? 'text-[#60a0ef]' : ''
                }
              >
                {navLink}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
