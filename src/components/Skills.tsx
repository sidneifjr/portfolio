import { useId } from 'react'

export const Skills = () => {
  const id = useId()

  const skills = [
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'React',
    'Next.js',
    'Astro',
    'Cypress',
    'Node.js',
  ]

  return (
    <ul className="py-6 flex gap-2">
      {skills.map((skill) => (
        <li key={id} className="text-white">
          {skill}
        </li>
      ))}
    </ul>
  )
}
