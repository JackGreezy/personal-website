import Section from "./Section"
import "./Contact.css"

function Contact({ email, socialLinks }) {
  return (
    <Section title="Contact Me">
      <p>Feel free to reach out if you'd like to collaborate or just say hello!</p>
      <p>
        Email: <a href={`mailto:${email}`}>{email}</a>
      </p>

      <div className="social-links">
        {socialLinks.map((link, index) => (
          <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
            {link.name}
          </a>
        ))}
      </div>
    </Section>
  )
}

export default Contact

