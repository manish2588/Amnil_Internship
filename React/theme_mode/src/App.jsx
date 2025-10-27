import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Example from './components/Example'
import './App.css'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  const toggleTheme = () => {
    setDarkMode(!darkMode)
  }

  return (
    <div className={`app ${darkMode ? 'dark-theme' : 'light-theme'}`}>
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
      <Example />
    </div>
  )
}

export default App