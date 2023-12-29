import { useId } from 'react'

type NavLinksTypes = {
  activeItem: string
}

export const Nav = ({ activeItem }: NavLinksTypes) => {
  const id = useId()
  const navLinks = [
    {
      item: 'Portfólio',
    },
    {
      item: 'Sobre',
    },
    {
      item: 'Contato',
    },
  ]

  const pathname = activeItem.replace('/', '')

  return (
    <nav data-cy="nav">
      {/* <Menu /> */}

      <ul className="flex gap-6">
        {navLinks.map((navLink: { item: string }) => {
          return (
            <li
              key={id}
              className="font-secondary text-xl text-white hover:text-white/90 transition"
            >
              <a
                href={`/${navLink.item.toLowerCase()}`}
                className={
                  pathname === navLink.item.toLowerCase()
                    ? 'text-[#60a0ef]'
                    : ''
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
