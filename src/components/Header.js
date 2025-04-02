import "./Header.css"

function Header({ name, title, imageUrl }) {
  return (
    <div className="header">
      <img src={imageUrl || "/placeholder.svg"} alt={`${name} profile`} className="profile-image" />
      <h1>{name}</h1>
      <p className="subtitle">{title}</p>
    </div>
  )
}

export default Header

