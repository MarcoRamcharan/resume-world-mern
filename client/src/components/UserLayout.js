import { Outlet, useNavigate } from "react-router-dom"
import UserNavbar from "./UserNavbar"
import Footer from "./Footer"
import {useState} from 'react'
import {useLogout} from '../hooks/useLogout'
import {useAuthContext} from '../hooks/useAuthContext'

function UserLayout() {

  const [isOpen, setIsOpen] = useState(true)
  const [width, setWidth] = useState('0px')
  const [opacity, setOpacity] = useState(0)
  const {resume_user, token} = useAuthContext()

  const navigate = useNavigate()

  const toggle = () =>{
      setIsOpen(!isOpen)
      if(isOpen){
          setWidth('90vh')
          setOpacity(1)
      }else{
          setWidth('0vh')
          setOpacity(0)
      }
  }

  const navi = (link) =>{
    setIsOpen(!isOpen)
    setWidth('0vh')
    setOpacity(0)
    navigate(link)
  }

  console.log(opacity)

  const {logout} = useLogout()

  const logOut = () =>{
    logout()
  }

  return (
    <div className="user-layout">
        <div style={{height: width}} className="user-menu" id="user-menu">
            {resume_user && <h2 style={{fontFamily: 'Gemunu Libre, sans-serif', color: 'purple'}}><i style={{margin:'10px'}} class="fa-solid fa-user"></i> {resume_user.user.email}</h2>}
            <p onClick={()=>{navi('/user/dashboard')}}>USERHOME</p>
            {token  && <p onClick={()=>{navi('/user/dashboard/myResume')}}>MY RESUME</p>}
            {!token && <p onClick={()=>{navi('/user/dashboard/addResume')}}>ADD RESUME</p>}
            <button onClick={logOut}>LOGOUT</button>
        </div>
    <UserNavbar isOpen={isOpen} toggle={toggle}/>
    <Outlet/>
    <Footer/>
</div>
  )
}

export default UserLayout
