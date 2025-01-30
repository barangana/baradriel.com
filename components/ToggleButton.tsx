'use client'
import { useState, useEffect } from 'react'

export const ToggleButton = () => {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode') === 'true'
    setDarkMode(savedMode)
    if (savedMode) {
      document.documentElement.classList.add('dark')
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('darkMode', String(darkMode))
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className='px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded transition'
    >
      Toggle {darkMode ? 'Light' : 'Dark'} Mode
    </button>
  )
}
