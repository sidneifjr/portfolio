import type { ReactNode } from 'react'

interface FormFieldsetProps
  extends React.FieldsetHTMLAttributes<HTMLFieldSetElement> {
  children: ReactNode
}

export const FormFieldset = ({ children }: FormFieldsetProps) => {
  return <fieldset className="w-full flex flex-col">{children}</fieldset>
}
