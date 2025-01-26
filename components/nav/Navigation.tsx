import React from 'react'
import NavLinks from './NavLinks'

const Navigation = () => {
  return (
    <div className='flex justify-between dark:bg-zinc-900 dark:text-white mt-2 py-4 px-4'>
      <NavLinks href='/'>Adriel Barangan</NavLinks>
      <div className='flex space-x-2 text-md'>
        <NavLinks href='/projects'>projects</NavLinks>
        <NavLinks href='/bookmarks'>bookmarks</NavLinks>
        <NavLinks href='/readings'>readings</NavLinks>
        <NavLinks href='#contact'>contact</NavLinks>
      </div>
    </div>
  )
}

export default Navigation
