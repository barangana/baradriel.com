'use client'

import React from 'react'

const About = () => {
  const openResume = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    window.open(`/files/Adriel Barangan_Resume.pdf`)
  }

  return (
    <div className='animate-fadeIn mt-24'>
      <h2 className='text-lg font-bold'>Adriel Barangan</h2>
      <h3 className='text-lg font-bold'>Full Stack Engineer</h3>
      <p className='pt-4 max-w-2xl'>
        I am a full stack engineer, always learning and passionate about
        technology. I love crafting applications that are seamless in design
        whilst being built for performance and usability.
      </p>
      <p className='max-w-2xl pt-4'>
        Welcome to my minimalist portfolio, where you can learn more about me
        such as the projects I have worked on, the books I read and the games I
        play.
      </p>
      <div className='mt-6'>
        <button className='hover:text-zinc-600 font-bold' onClick={openResume}>
          View Resume
        </button>
      </div>
    </div>
  )
}

export default About
