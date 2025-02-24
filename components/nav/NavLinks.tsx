import Link from 'next/link'
import React, { ReactNode } from 'react'

interface NavLinksProps {
  children: ReactNode
  href: string
}

const NavLinks = ({ children, href }: NavLinksProps) => {
  return (
    <Link
      href={href}
      className='hover:bg-zinc-300 dark:hover:bg-zinc-600 rounded-md transition-colors duration-300 ease-in-out'
    >
      {children}
    </Link>
  )
}

export default NavLinks
