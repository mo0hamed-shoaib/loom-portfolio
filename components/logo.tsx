'use client'

import { useTheme } from 'next-themes'
import Image from 'next/image'
import { useEffect, useState } from 'react'

interface LogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

export function Logo({ className = '', size = 'md' }: LogoProps) {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className={`animate-pulse bg-muted rounded ${getSizeClasses(size)} ${className}`} />
  }

  const logoSrc = resolvedTheme === 'dark' ? '/favicon-light.svg' : '/favicon-dark.svg'

  return (
    <Image
      src={logoSrc}
      alt="Loom Logo"
      width={getLogoSize(size)}
      height={getLogoSize(size)}
      className={`${className}`}
      priority
    />
  )
}

function getSizeClasses(size: string) {
  switch (size) {
    case 'sm':
      return 'w-6 h-6'
    case 'md':
      return 'w-10 h-10'
    case 'lg':
      return 'w-12 h-12'
    case 'xl':
      return 'w-16 h-16'
    default:
      return 'w-10 h-10'
  }
}

function getLogoSize(size: string) {
  switch (size) {
    case 'sm':
      return 24
    case 'md':
      return 40
    case 'lg':
      return 48
    case 'xl':
      return 64
    default:
      return 40
  }
}
