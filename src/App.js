import "./App.css"
import Header from "./components/Header"
import Section from "./components/Section"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {
  // Data that could come from an API or database in a real app
  const skills = ["HTML5 & CSS3", "JavaScript", "React", "Node.js", "UI/UX Design"]

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
    <div className="App">
      <Header name="Jack Greenberg" title="Web Developer & Designer" imageUrl="/placeholder.svg?height=150&width=150" />

      <Section title="About Me">
        <p>
          Hello! I'm a passionate web developer and designer currently studying ECE at Texas. I love creating
          beautiful, functional websites and applications that solve real-world problems.
        </p>
        <p>When I'm not coding, you can find me hiking, reading science fiction, or experimenting with new recipes.</p>
      </Section>

      <Skills skills={skills} />

      <Projects projects={projects} />

      <Contact
        email="alex@example.com"
        socialLinks={[
          { name: "GitHub", url: "https://github.com" },
          { name: "LinkedIn", url: "https://linkedin.com" },
          { name: "Twitter", url: "https://twitter.com" },
        ]}
      />

      <Footer />
    </div>
  )
}

export default App

