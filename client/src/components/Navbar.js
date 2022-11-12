import { Link } from "react-router-dom"

function Navbar({toggle, isOpen}) {
  return (
    <div className="nav">
      <h4>RESUME WORLD</h4>
      <div className="navLinks" id="navLinks">
          <Link to="/">ABOUT</Link>
          <Link to="/">CONTACT</Link>
          <Link to="/">HOW TO</Link>
          <Link to="/signup">SIGNUP</Link>
          <Link to="/login">LOGIN</Link>
      </div>
      <div id="menu-icon" className='menu-icon'>
          <h2 onClick={toggle} style={{color: "white"}}>{!isOpen ? <i class="fa-solid fa-xmark"></i> : <i className="fa-solid fa-bars"></i>}</h2>
      </div>
  </div>
  )
}

export default Navbar
