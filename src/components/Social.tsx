import { Github, Linkedin, Mail } from 'lucide-react'

export const Social = () => {
  return (
    <div className="flex gap-4">
      <a
        href="https://www.linkedin.com/in/sidnei-farias/"
        title="Linkedin"
        target="blank"
      >
        <Linkedin className="text-white" />
      </a>

      <a href="https://github.com/sidneifjr" title="Github" target="blank">
        <Github className="text-white" />
      </a>

      <a href="mailto:sfarias.dev@gmail.com" title="Email" target="blank">
        <Mail className="text-white" />
      </a>
    </div>
  )
}
