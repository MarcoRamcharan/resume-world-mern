import { Outlet, useNavigate } from "react-router-dom"
import Navbar from "./Navbar"
import Footer from "./Footer"
import {useState} from 'react'



function MainLayout() {

  const [isOpen, setIsOpen] = useState(true)
  const [width, setWidth] = useState('0px')
  const [opacity, setOpacity] = useState(0)

  const navigate = useNavigate()

  const toggle = () =>{
      setIsOpen(!isOpen)
      if(isOpen){
          setWidth('40vh')
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

  return (
    <div className="main-layout">
        <div style={{height: width}} className="menu" id="menu">
            <p onClick={()=>{navi('/')}}>HOME</p>
            <p onClick={()=>{navi('/login')}}>LOGIN</p>
            <p onClick={()=>{navi('/signup')}}>SIGNUP</p>
        </div>
        <Navbar isOpen={isOpen} toggle={toggle}/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default MainLayout
