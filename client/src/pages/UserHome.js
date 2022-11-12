import xx from '../images/xx.png'
import rr from '../images/rr.png'
import red from '../images/red.png'
import {Link} from 'react-router-dom'
import {useAuthContext} from '../hooks/useAuthContext'
import {useEffect, useState, useCallback} from 'react'
import '../css/userHome.css'



function UserHome() {


  const [cvStatus, setCvStatus] = useState(false)
  const [displayDeleteBox, setDisplayDeleteBox] = useState(false)
  const [deleteOk, setDeleteOk] = useState(false)
  const [deleteBad, setDeleteBad] = useState(false)
  const [removingResume, setRemovingResume] = useState(false)

  const {resume_user, token} = useAuthContext()
  const getResStatus = useCallback( async () =>{
    try{
        const res = await fetch(`/api/resume/getResStatus`,{
            method: 'GET',
            headers: {
              'Authorization': `Bearer ${resume_user.token}`,
              'Content-Type' : 'application/json'
          },
        })
          const json = await res.json()
          console.log('success', json)
          setCvStatus(json)
    }catch(error){
      console.log(error)
    }
} ,[resume_user])


    useEffect(()=>{
        getResStatus()
    },[getResStatus])


    const deleteResume = (e) =>{
      setDisplayDeleteBox(true)
    }

    const deleteResumeConfirmed = (e) =>{
      deleteRes()
    }

    const deleteResumeCanceled = (e) =>{
      setDisplayDeleteBox(false)
    }


    const deleteRes = async () =>{
      console.log('delete method hit')
      try{
          setRemovingResume(true)
          const res = await fetch(`/api/resume/deleteResume`,{
              method: 'DELETE',
              headers: {
                'Authorization': `Bearer ${resume_user.token}`,
                'Content-Type' : 'application/json'
            },
          })
            const json = await res.json()
            if(json === true){
              setRemovingResume(false)
              setDisplayDeleteBox(false)
              setDeleteOk(true)
              setDeleteBad(false)
              window.location.reload()
            }else{
              setRemovingResume(false)
              setDeleteBad(true)
              console.log('error for delete resume')
            }
      }catch(error){
        setRemovingResume(false)
        setDeleteBad(true)
        console.log(error)
      }
  } 


  return (
    <div class="userHome">
      {
        !cvStatus ? (
          <div class="nocv">
          <div class="img" id="img">
              <img src={xx} alt="pic"/>
          </div>
          <div class="nocv-content">
              <div class="headings">
                {
                  resume_user && (<h1>HELLO {resume_user.user.email}</h1>)
                }
                  <h2>YOU HAVE <span style={{color: red}}>NO</span> RESUME UPLOADED.</h2>
              </div>
              <img src={rr} alt="" height="160px" width="170px"/>
              <div class="paraSteps">
                  <h2>STEPS</h2>
                  <p>Fill in your details</p>
                  <p>Hit enter</p>
                  <p>Your resume is now online</p>
                  <p>You will be given a url</p>
                  <p>Provide employers with this url</p>
                  <p>Follow the link below to start</p>
              </div>
              <Link to='/user/dashboard/addResume'>CREATE RESUME</Link>
          </div>
      </div>
        )
        : (
          <div class="cv">
          <div class="cv-left">
            {
             displayDeleteBox && 
             (<div className="confirmDelete">
             <h3>CONFRIM RESUME DELETE</h3>
             <div className="confirm-buttons">
               <p onClick={deleteResumeConfirmed}>YES</p>
               <p onClick={deleteResumeCanceled}>NO</p>
             </div>
           </div> )
            }
            {
              deleteOk && (
                <div className="deleteSuccess">
                  <p>RESUME SUCESSFULLY DELETED</p>
                </div>
              )
            }
            {
              deleteBad && (
                <div className="deleteBad">
                  <p>ERROR DELETING RESUME</p>
                </div>
              )
            }
            {
              removingResume && (
                <div className="removeResume">
                  <p>...DELETING RESUME</p>
                </div>
              )
            }
          {
                  resume_user && (<h1>HELLO <span style={{color:'green'}}>{resume_user.user.email}</span></h1>)
                }
              <p>your resume is online</p>
              <img src={red} alt="jkl"/>
          </div>
          <div class="cv-right">
          <div class="token-info">
                  <h3 style={{color:'silver'}}>TOKEN</h3>
                  {token && (
                    <p style={{color:'gold', fontSize: '30px'}}>{token}</p>
                  )}
              </div>
              <Link to='/user/dashboard/myResume'>VIEW YOUR RESUME</Link>
              <button onClick={deleteResume}>DELETE YOUR RESUME</button>
          </div>
      </div>
        )
      }
</div>
  )
}

export default UserHome
