import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className='mb-4 text-md'>
      © {new Date().getFullYear()} Adriel Barangan
    </footer>
  )
}

export default Footer
