import Section from "./Section"
import "./Projects.css"

function Projects({ projects }) {
  return (
    <Section title="Projects">
      {projects.map((project) => (
        <div className="project-card" key={project.id}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
        </div>
      ))}
    </Section>
  )
}

export default Projects

