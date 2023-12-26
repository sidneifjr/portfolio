import { type ReactNode } from 'react'

import { m, LazyMotion, domAnimation } from 'framer-motion'

interface MotionWrapper {
  children: ReactNode
  initial: any
  animate: any
  transition: any
  exit: any
  className: string
}

export const MotionWrapper = ({
  children,
  initial,
  animate,
  transition,
  exit,
  className,
}: MotionWrapper) => {
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        initial={initial}
        animate={animate}
        transition={transition}
        exit={exit}
        className={className}
      >
        {children}
      </m.div>
    </LazyMotion>
  )
}
