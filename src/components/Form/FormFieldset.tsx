import type { ReactNode } from 'react'

type FormFieldsetProps = {
  children: ReactNode
}

export const FormFieldset = ({ children }: FormFieldsetProps) => {
  return <fieldset className="w-full flex flex-col">{children}</fieldset>
}
