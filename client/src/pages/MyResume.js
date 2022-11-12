import {useAuthContext} from '../hooks/useAuthContext'
import {useEffect, useState, useCallback} from 'react'
import Lay1 from '../components/Lay1'
import Lay2 from '../components/Lay2'
import Lay3 from '../components/Lay3'


const MyResume = () => {

    const [resume, setResume] = useState('')

    const {resume_user} = useAuthContext()
  
    const getResume = useCallback( async () => {
      try{
          const res = await fetch(`/api/resume/getResume`,{
              method: 'GET',
              headers: {
                'Authorization': `Bearer ${resume_user.token}`,
                'Content-Type' : 'application/json'
            },
          })
            const json = await res.json()
            console.log('success', json)
            setResume(json)
            console.log('my reusme', json)
      }catch(error){
        console.log(error)
      }
  } ,[resume_user])
  
      useEffect(()=>{
          getResume()
      },[getResume])


    return ( 
        <div style={{display:'flex', justifyContent:'center'}}  className="myresresume">
            { resume.layout === 'layout1' &&  (<Lay1 resume={resume}/>) }
            { resume.layout === 'layout2' && (<Lay2 resume={resume}/>) }
            { resume.layout === 'layout3' && (<Lay3 resume={resume}/>) }
      </div>
     );
}
 
export default MyResume;