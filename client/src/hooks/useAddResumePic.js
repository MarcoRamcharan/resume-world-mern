import {useState} from 'react'
import {useAuthContext} from './useAuthContext'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

export const useAddResumePic = () =>{
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const {dispatch, resume_user}  = useAuthContext()

    const addResumePic = async(data) =>{
        try{
            setLoading(true)
            setError(false)
            console.log('hook data', data)
            const res = await axios.post('/api/resume/createPhoto',data,{
                headers: {
                    'Authorization': `Bearer ${resume_user.token}`,
                    'Content-Type' : 'multipart/form-data'
                },
            })
              const json = await res.data
              console.log('success', json)
              dispatch({type:'SET_TOKEN', payload: json.token})
              localStorage.setItem('resume_user_token', JSON.stringify(json.token))
              setError(false)
              navigate('/user/dashboard')
        }catch(error){
            console.log(error)
            setError(true)
        }
        finally{
            setLoading(false)
        }
    }

    return {addResumePic, loading, error}
}