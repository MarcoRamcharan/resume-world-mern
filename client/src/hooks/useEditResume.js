import {useState} from 'react'
import {useAuthContext} from './useAuthContext'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

export const useEditResume = () =>{

    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const {resume_user}  = useAuthContext()

    const editResume = async(data) =>{
        console.log('edit resume without pic')
        try{
            setLoading(true)
            setError(false)
            const res = await axios.post('/api/resume/updateRes',data,{
                headers: {
                    'Authorization': `Bearer ${resume_user.token}`,
                },
            })
              const json = await res.data
              console.log('success updating resume', json)
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

    return {editResume, loading, error}
}