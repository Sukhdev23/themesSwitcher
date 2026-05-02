import { useEffect, useState } from 'react'
import ThemeContext from './themeContext'

export function ThemeProvider({ children }) {
  const [themeMode, setThemeMode] = useState('light')

  const lightTheme = () => {
    setThemeMode('light')
  }

  const darkTheme = () => {
    setThemeMode('dark')
  }

  const toggleTheme = () => {
    setThemeMode((prev) => (prev === 'light' ? 'dark' : 'light'))
  }

  useEffect(() => {
    const html = document.documentElement

    html.classList.remove('light', 'dark')
    html.classList.add(themeMode)
  }, [themeMode])

  return (
    <ThemeContext.Provider
      value={{ theme: themeMode, themeMode, setThemeMode, lightTheme, darkTheme, toggleTheme }}
    >
      {children}
    </ThemeContext.Provider>
  )
}