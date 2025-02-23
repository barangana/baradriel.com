import { ProjectProps } from '@/utils/projects'
import Link from 'next/link'
import React from 'react'

const Projects = ({ projects }: ProjectProps) => {
  return (
    <div className='animate-fadeIn flex flex-col mt-24'>
      <h2 className='text-xl font-bold'>Projects</h2>
      <div>
        {projects.map((project) => (
          <Link key={project.id} href={project.href}>
            <div className='py-3 hover:bg-zinc-300 max-w-2xl dark:hover:bg-zinc-600 duration-300 ease-in-out rounded-md'>
              <h3 className='text-lg font-bold'>{project.name}</h3>
              <p>{project.short_desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Projects
