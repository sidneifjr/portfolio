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
      className="w-full max-w-[676px] h-[452px] mx-auto flex flex-col gap-7"
      onSubmit={onSubmit}
      data-cy={dataCy}
    >
      {children}
    </form>
  )
}
