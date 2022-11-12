import { Link } from "react-router-dom"
import '../css/userNav&Foot.css'
import {useLogout} from '../hooks/useLogout'
import {useAuthContext} from '../hooks/useAuthContext'


function UserNavbar({toggle, isOpen}) {

  const {logout} = useLogout()
  const {resume_user, token} = useAuthContext()

  const logOut = () =>{
    logout()
  }

  return (
    <div class="usernavbar">
    <Link to="/"><h5>RESUME WORLD</h5></Link>
    <div class="links" id="links">
        <h3 style={{fontFamily: 'Gemunu Libre, sans-serif', color: 'purple'}}><i style={{margin:'10px'}} class="fa-solid fa-user"></i>{resume_user ? resume_user.user.email : ''}</h3>
        <Link to='/user/dashboard'>HOME</Link>
        {!token && <Link to='/user/dashboard/addResume'>ADD RESUME</Link>}
        {token && <Link to='/user/dashboard/myResume'>MY RESUME</Link>}
        <button onClick={logOut}>LOGOUT</button>
    </div>
          <div id="menu-icon-user" className='menu-icon-user'>
          <h2 onClick={toggle} style={{color: "black"}}>{!isOpen ? <i class="fa-solid fa-xmark"></i> : <i className="fa-solid fa-bars"></i>}</h2>
      </div>
</div>
  )
}

export default UserNavbar
