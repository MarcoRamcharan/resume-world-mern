import {useState} from 'react'
import {useAuthContext} from './useAuthContext'
import {useNavigate} from 'react-router-dom'

export const useLogin = () =>{
    const navigate = useNavigate()
    const [error, setError] = useState('')
    const [isloading, setIsLoading] = useState('')

    const {dispatch}  = useAuthContext()


    const login = async(email, password) =>{
        setIsLoading(true)
        setError(null)
        const response = await fetch('http://localhost:5000/api/auth/login', {
            method : 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({email, password})
        })

        const json = await response.json()
        console.log('user info', json)

        if(!response.ok){
            setIsLoading(false)
            setError(json.error)
        }
        if(response.ok){
            //save user to local storage
                localStorage.setItem('resume_user', JSON.stringify(json))
                localStorage.setItem('resume_user_token', JSON.stringify(json.resumetoken))
                dispatch({type: 'SET_TOKEN', payload: json.resumetoken})
                dispatch({type: 'LOGIN', payload: json})
                setIsLoading(false)
                navigate('/user/dashboard')
        }
    }

    return {login, isloading, error}
}