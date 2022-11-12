import { useState } from "react"
import '../css/login.css'
import { useLogin } from "../hooks/useLogin"

function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {error, isLoading, login} = useLogin()

  const handleLogin = async (e) =>{
    e.preventDefault()
    login(email, password)
  
  }

  return (
    <div class="login">
        <div class="respic"></div>
        <div class="login-form">
            <div class="login-headings">
                <h1>LOGIN</h1>
                <p>DID YOU MISS US ?</p>
            </div>
            <form>
                <div class="input-group">
                    <label>EMAIL</label>
                    <input type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div class="input-group">
                    <label>PASSWORD</label>
                    <input type="text"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div class="input-group">
                    <button disabled={isLoading} onClick={handleLogin}>LOGIN</button>
                </div>
                {
                    error && (
                    <div class="message input-group">
                        <h6>{error}</h6>
                    </div>
                    )
                }
            </form>
        </div>
    </div>
  )
}
export default Login
