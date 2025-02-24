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
      className='group rounded-md transition-colors duration-300 ease-in-out'
    >
      <span className=''>{children}</span>
    </Link>
  )
}

export default NavLinks
