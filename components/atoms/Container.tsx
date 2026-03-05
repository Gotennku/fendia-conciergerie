import { ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'full'
}

const sizes = {
  sm: 'max-w-3xl',
  md: 'max-w-5xl',
  lg: 'max-w-7xl',
  full: 'max-w-full',
}

export function Container({ children, className = '', size = 'lg' }: ContainerProps) {
  return (
    <div className={`w-full ${sizes[size]} mx-auto px-4 md:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  )
}
