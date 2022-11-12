import {useState} from 'react'
import {useAuthContext} from './useAuthContext'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

export const useEditResumePic = () =>{
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const {resume_user}  = useAuthContext()

    const editResumePic = async(data) =>{
        try{
            setLoading(true)
            setError(false)
            const res = await axios.put('/api/resume/updateResPhoto',data,{
                headers: {
                    'Authorization': `Bearer ${resume_user.token}`,
                    'Content-Type' : 'multipart/form-data'
                },
            })
              const json = await res.data
              console.log('success', json)
              setError(false)
              navigate('/user/dashboard/myResume')
        }catch(error){
            console.log(error)
            setError(true)
        }
        finally{
            setLoading(false)
        }
    }

    return {editResumePic, loading, error}
}