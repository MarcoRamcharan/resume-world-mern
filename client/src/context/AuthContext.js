import { createContext, useReducer, useEffect } from "react";

export const AuthContext = createContext()

export const authReducer = (state, action) => {
    switch(action.type){
        case 'LOGIN':
            return {...state, resume_user : action.payload}
        case 'SET_TOKEN':
            return {...state, token : action.payload}
        case 'REMOVE_TOKEN':
            return {...state, token : null}
        case 'LOGOUT':
            return {...state, resume_user : null}
        default:
            return state
    }
}

export const AuthContextProvider = ({children}) => {
    const [state, dispatch]= useReducer(authReducer,{
        resume_user: null,
        token: null
    })

    useEffect(()=>{
        const resume_user = JSON.parse(localStorage.getItem('resume_user'))
        if(resume_user){
            dispatch({type: 'LOGIN', payload: resume_user})
        }else{
            console.log('cannot save user')
        }
    },[])

    useEffect(()=>{
        const token = JSON.parse(localStorage.getItem('resume_user_token'))
        if(token){
            dispatch({type: 'SET_TOKEN', payload: token})
        }else{
            console.log('cannot save token')
        }
    },[])


    console.log('authcontextstate', state)

    return(
        <AuthContext.Provider value={{...state, dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}