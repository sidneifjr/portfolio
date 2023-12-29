import type { ReactNode } from 'react'

interface FormButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'data-cy': string
  children: ReactNode
}

export const FormButton = (
  props: FormButtonProps,
  { children }: FormButtonProps
) => {
  return (
    <button
      className="w-24 text-lg min-h-10 font-medium text-white/50 text-center border-2 border-white/50 rounded-md py-1 px-4 mx-auto flex justify-center items-center transition placeholder:text-white placeholder:opacity-50 hover:border-white hover:text-white focus:text-white"
      {...props}
    >
      {children}
    </button>
  )
}
