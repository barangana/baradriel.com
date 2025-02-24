import React from 'react'
import NavLinks from './NavLinks'
import { ToggleButton } from '../ToggleButton'

const Navigation = () => {
  return (
    <nav className='flex justify-between w-full max-w-2xl mt-4'>
      <NavLinks href='/'>Adriel Barangan</NavLinks>
      <div className='flex space-x-2 text-md'>
        <NavLinks href='/projects'>projects</NavLinks>
        <NavLinks href='/readings'>readings</NavLinks>
        <ToggleButton />
      </div>
    </nav>
  )
}

export default Navigation
