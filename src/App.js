"use client"

import { useState } from "react"
import "./App.css"
import Header from "./components/Header"
import Section from "./components/Section"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
// Import Material UI components
import { Button, TextField } from "@mui/material"
import { ThemeProvider, createTheme } from "@mui/material/styles"

function App() {
  // Add state for dark mode
  const [darkMode, setDarkMode] = useState(false)

  // Add state for a new skill
  const [newSkill, setNewSkill] = useState("")
  const [skills, setSkills] = useState(["HTML5 & CSS3", "JavaScript", "React", "Node.js", "UI/UX Design"])

  // Create a theme based on dark mode state
  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  })

  // Event handler to add a new skill
  const handleAddSkill = () => {
    if (newSkill.trim() !== "") {
      setSkills([...skills, newSkill])
      setNewSkill("")
    }
  }

  const projects = [
    {
      id: 1,
      title: "Weather App",
      description: "A responsive weather application built with HTML, CSS, and JavaScript.",
      link: "https://github.com",
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "This website, built using React and modern web technologies.",
      link: "https://github.com",
    },
  ]

  return (
    <ThemeProvider theme={theme}>
      <div className={`App ${darkMode ? "dark-mode" : ""}`}>
        <Header
          name="Jack Greenberg"
          title="Texas ECE Student"
          imageUrl="/placeholder.svg?height=150&width=150"
          darkMode={darkMode}
          toggleDarkMode={() => setDarkMode(!darkMode)}
        />

        <Section title="About Me">
          <p>
            Hello! I'm a passionate web developer and designer currently studying ECE. I love creating beautiful,
            functional websites and applications that solve real-world problems.
          </p>
          <p>
            When I'm not coding, you can find me hiking, reading science fiction, or experimenting with new recipes.
          </p>
        </Section>

        <Skills skills={skills} />

        {/* Add skill form using Material UI components */}
        <div className="add-skill-section">
          <Section title="Add a Skill">
            <div className="skill-form">
              <TextField
                label="New Skill"
                variant="outlined"
                value={newSkill}
                onChange={(e) => setNewSkill(e.target.value)}
                size="small"
                style={{ marginRight: "10px" }}
              />
              <Button variant="contained" color="primary" onClick={handleAddSkill}>
                Add Skill
              </Button>
            </div>
          </Section>
        </div>

        <Projects projects={projects} />

        <Contact
          email="jack@example.com"
          socialLinks={[
            { name: "GitHub", url: "https://github.com" },
            { name: "LinkedIn", url: "https://linkedin.com" },
            { name: "Twitter", url: "https://twitter.com" },
          ]}
        />

        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App

