import '../layoutsCss/layout1.css'
import '../layoutsCss/layout2.css'
import '../layoutsCss/layout3.css'
import Lay1 from '../components/Lay1'
import Lay2 from '../components/Lay2'
import Lay3 from '../components/Lay3'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'


function Resume() {

  const {token} = useParams()
  console.log(token)
  const [resume, setResume] = useState([])

  useEffect(() =>{
    console.log('rlkjkl')
    const getResume = async() =>{
    try{
    const response = await axios.get(`/api/getResume/${token}`)
    const json = await response.data
    console.log('our resumeData', json)
    setResume(json)
  }catch(error){
    console.log(error)
  }
  }
    getResume()
  },[token])
  
  return (
    <div className="resume">
      {
        resume.layout === 'layout1'  && 
        (
            <Lay1 resume={resume}/>
        )
      }
      {
        resume.layout === 'layout2'  && (
            <Lay2 resume={resume}/>
        )
}
    {
        resume.layout === 'layout3'  && (
            <Lay3 resume={resume}/>
        )
    }
    {
        !resume.layout  && (
           <h1>no larojif roirj</h1>
        )
    }
    </div>
  )
}

export default Resume
