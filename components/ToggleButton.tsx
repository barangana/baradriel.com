'use client'
import { useState, useEffect } from 'react'
import { FiMoon, FiSun } from 'react-icons/fi'

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
      className='p-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded-full transition hover:bg-gray-300 dark:hover:bg-gray-600'
      aria-label='Toggle dark mode'
    >
      {darkMode ? <FiSun /> : <FiMoon />}
    </button>
  )
}
