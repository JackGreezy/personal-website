"use client"

import "./Header.css"
import { Button } from "@mui/material"
import { Brightness4, Brightness7 } from "@mui/icons-material"

function Header({ name, title, imageUrl, darkMode, toggleDarkMode }) {
  return (
    <div className={`header ${darkMode ? "dark-mode" : ""}`}>
      <div className="header-content">
        <img src={imageUrl || "/placeholder.svg"} alt={`${name} profile`} className="profile-image" />
        <h1>{name}</h1>
        <p className="subtitle">{title}</p>
      </div>

      {/* Material UI Button with icon */}
      <Button
        variant="outlined"
        color="inherit"
        onClick={toggleDarkMode}
        startIcon={darkMode ? <Brightness7 /> : <Brightness4 />}
        className="theme-toggle"
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </Button>
    </div>
  )
}

export default Header

