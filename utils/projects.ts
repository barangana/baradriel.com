export interface ProjectProps {
  projects: {
    id: number
    name: string
    short_desc: string
    href: string
  }[]
}

export const projects = [
  {
    id: 1,
    name: 'Drift',
    short_desc:
      'Productivity web application built with Next.js, React, Typescript, Supabase, Tailwind.',
    href: '/drift',
  },
  {
    id: 2,
    name: 'Timetracker',
    short_desc:
      'Timetracking web application built with Node, Next.js, React, Typescript, Tailwind, Postgres and Redis.',
    href: '/timetracker',
  },
  {
    id: 3,
    name: 'Calodesign',
    short_desc:
      'Landing page for an interior design company built on Next.js, React, Typescript, Sanity and Chakra UI.',
    href: '/calodesign',
  },
]
