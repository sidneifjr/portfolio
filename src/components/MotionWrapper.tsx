import { type ReactNode } from 'react'

import { LazyMotion, domAnimation, m } from 'framer-motion'

type MotionWrapperProps = {
  className: string
  children: ReactNode
}

export const MotionWrapper = ({ children, className }: MotionWrapperProps) => {
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        initial={{ y: '25%', opacity: 0 }}
        animate={{ y: '0%', opacity: 1 }}
        transition={{ duration: 0.75, ease: [0.33, 1, 0.68, 1] }}
        exit={{ y: '-15%', opacity: 0 }}
        className={className}
      >
        {children}
      </m.div>
    </LazyMotion>
  )
}
