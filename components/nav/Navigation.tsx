import React from 'react'
import NavLinks from './NavLinks'

const Navigation = () => {
  return (
    <div className='flex justify-between dark:bg-zinc-900 dark:text-white mt-2 py-4 px-4'>
      <div className='text-md py-1'>adriel barangan</div>
      <div className='flex space-x-2 text-md'>
        <NavLinks href='/'>projects</NavLinks>
        <NavLinks href='/'>bookmarks</NavLinks>
        <NavLinks href='/'>readings</NavLinks>
        <NavLinks href='/'>contact</NavLinks>
      </div>
    </div>
  )
}

export default Navigation
