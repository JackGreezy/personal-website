import Section from "./Section"
import "./Skills.css"

function Skills({ skills }) {
  return (
    <Section title="Skills">
      <ul className="skills-list">
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </Section>
  )
}

export default Skills

