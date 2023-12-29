import type { ReactNode } from 'react'

interface FormLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
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
