import type { ReactNode } from 'react'

interface FormButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'data-cy': string
  children: ReactNode
}

export const FormButton = ({
  'data-cy': dataCy,
  children,
}: FormButtonProps) => {
  return (
    <button
      className="min-w-24 text-lg min-h-10 font-semibold text-white text-center uppercase bg-blue rounded-md py-1 px-4 mx-auto flex justify-center items-center transition placeholder:text-white placeholder:opacity-50 hover:border-white hover:text-white focus:text-white"
      data-cy={dataCy}
    >
      {children}
    </button>
  )
}
