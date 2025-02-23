import React from 'react'
import NavLinks from './NavLinks'
import { ToggleButton } from '../ToggleButton'

const Navigation = () => {
  return (
    <div className='flex justify-between mt-2 py-4 px-4'>
      <NavLinks href='/'>Adriel Barangan</NavLinks>
      <div className='flex space-x-2 text-md'>
        <NavLinks href='/projects'>projects</NavLinks>
        <NavLinks href='/readings'>readings</NavLinks>
        <ToggleButton />
      </div>
    </div>
  )
}

export default Navigation
