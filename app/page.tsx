import About from '@/components/About'
import Contact from '@/components/Contact'
import Projects from '@/components/Projects'
import { ToggleButton } from '@/components/ToggleButton'
import { projects } from '@/utils/projects'

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center mb-24'>
      <About />
      <Projects projects={projects} />
      <Contact />
    </div>
  )
}
