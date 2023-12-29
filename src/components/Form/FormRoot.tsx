import type { ReactNode } from 'react'

type FormRootProps = {
  onSubmit: (e: any) => void
  'data-cy': string
  children: ReactNode
}

export const FormRoot = ({
  onSubmit,
  'data-cy': dataCy,
  children,
}: FormRootProps) => {
  return (
    <form
      className="w-full max-w-[676px] m-auto flex flex-1 flex-col justify-center items-center gap-7"
      onSubmit={onSubmit}
      data-cy={dataCy}
    >
      {children}
    </form>
  )
}
