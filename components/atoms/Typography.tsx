import { ReactNode } from 'react'

interface TypographyProps {
  children: ReactNode
  className?: string
}

export function H1({ children, className = '' }: TypographyProps) {
  return (
    <h1 className={`text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight ${className}`}>
      {children}
    </h1>
  )
}

export function H2({ children, className = '' }: TypographyProps) {
  return (
    <h2 className={`text-3xl md:text-4xl font-semibold text-foreground leading-tight ${className}`}>
      {children}
    </h2>
  )
}

export function H3({ children, className = '' }: TypographyProps) {
  return (
    <h3 className={`text-xl md:text-2xl font-semibold text-foreground ${className}`}>
      {children}
    </h3>
  )
}

export function Paragraph({ children, className = '' }: TypographyProps) {
  return (
    <p className={`text-gray-600 leading-relaxed ${className}`}>
      {children}
    </p>
  )
}

export function Lead({ children, className = '' }: TypographyProps) {
  return (
    <p className={`text-lg md:text-xl text-gray-500 leading-relaxed ${className}`}>
      {children}
    </p>
  )
}

export function Small({ children, className = '' }: TypographyProps) {
  return (
    <span className={`text-sm text-gray-500 ${className}`}>
      {children}
    </span>
  )
}
