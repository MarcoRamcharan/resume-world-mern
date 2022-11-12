import {useAuthContext} from './useAuthContext'
import {useNavigate} from 'react-router-dom'

export const useLogout = () =>{

    const navigate = useNavigate()
    const {dispatch} = useAuthContext()



    const logout = () =>{
    //remove user form storage
    localStorage.removeItem('resume_user')
    localStorage.removeItem('resume_user_token')
        dispatch({type:'LOGOUT'})
        navigate('/login')
    }

    return {logout}
}