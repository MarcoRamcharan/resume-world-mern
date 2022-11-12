import {useState} from 'react'
import {useAuthContext} from './useAuthContext'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

export const useAddResume = () =>{
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const {dispatch, resume_user}  = useAuthContext()

    const addResume = async(data) =>{
        try{
            setLoading(true)
            setError(false)
            const res = await axios.post('/api/resume/create',data,{
                headers: {
                    'Authorization': `Bearer ${resume_user.token}`,
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

    return {addResume, loading, error}
}