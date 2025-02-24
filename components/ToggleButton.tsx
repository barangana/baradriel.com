'use client'

import { Moon, Sun } from 'lucide-react'
import { useState, useEffect } from 'react'

export const ToggleButton = () => {
  const [darkMode, setDarkMode] = useState<boolean | null>(null)

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode') === 'true'
    setDarkMode(savedMode)
    if (savedMode) {
      document.documentElement.classList.add('dark')
    }
  }, [])

  useEffect(() => {
    if (darkMode === null) return
    localStorage.setItem('darkMode', String(darkMode))
    document.documentElement.classList.toggle('dark', darkMode)
  }, [darkMode])

  return (
    <button
      onClick={() => setDarkMode((prev) => !prev)}
      aria-label='Toggle dark mode'
    >
      {darkMode ? <Sun /> : <Moon />}
    </button>
  )
}
