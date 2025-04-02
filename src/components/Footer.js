import "./Footer.css"

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <div className="footer">
      <p>&copy; {currentYear} Jack Greenberg. All rights reserved.</p>
    </div>
  )
}

export default Footer

