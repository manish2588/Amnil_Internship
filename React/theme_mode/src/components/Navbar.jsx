import React from 'react'
import './Navbar.css'

const Navbar = ({ darkMode, toggleTheme }) => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <span className="mode-text">
          {darkMode ? 'Dark Mode' : 'Light Mode'}
        </span>
      </div>
      <div className="nav-right">
        <button 
          className="theme-toggle-btn"
          onClick={toggleTheme}
        >
          {darkMode ? '☀️ Light' : '🌙 Dark'}
        </button>
      </div>
    </nav>
  )
}

export default Navbar