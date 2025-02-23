import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdOutlineMailOutline } from 'react-icons/md'

const Contact = () => {
  return (
    <div className='animate-fadeIn flex flex-col mt-24'>
      <h2 className='text-xl font-bold'>Contact</h2>
      <p className='pt-4 text-md max-w-2xl'>
        Let's connect. If you have a project idea or you want to work together
        or just want to chat and say hi, reach out to me on social media or send
        me an email.
      </p>
      <div className='flex pt-4'>
        <li className='flex list-none space-x-2'>
          <a className='hover: text-white' href='https://github.com/barangana'>
            <FaGithub size={25} />
          </a>
          <a
            className='hover: text-white'
            href='https://www.linkedin.com/in/barangana/'
          >
            <FaLinkedin size={25} />
          </a>
          <a className='hover: text-white' href='mailto:adriel@baradriel.com'>
            <MdOutlineMailOutline size={25} />
          </a>
        </li>
      </div>
    </div>
  )
}

export default Contact
