import { useId } from 'react'

export const Skills = () => {
  const id = useId()

  const skills = [
    'JavaScript',
    'TypeScript',
    'React',
    'Next.js',
    'Cypress',
    'Node.js',
  ]

  return (
    <ul className="py-6 flex gap-4">
      {skills.map((skill) => (
        <li key={id} className="text-white">
          {skill}
        </li>
      ))}
    </ul>
  )
}
