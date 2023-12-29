import type { ReactNode } from 'react'

type FormLabelProps = {
  htmlFor: string
  children: ReactNode
}

export const FormLabel = ({ htmlFor, children }: FormLabelProps) => {
  return (
    <label
      className="font-secondary text-lg text-white pb-2 block"
      htmlFor={htmlFor}
    >
      {children}
    </label>
  )
}
