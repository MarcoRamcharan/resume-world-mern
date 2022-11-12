import { useState } from "react"
import '../css/signup.css'
import { useSignup } from "../hooks/useSignup"



function Signup() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const {error, isLoading, signup} = useSignup()

  const handleSignup = async (e) =>{
    e.preventDefault()
    signup(email, password)
  }


  return (
    <div class="signup">
    <div class="respic"></div>
    <div class="signup-form">
        <div class="signup-headings">
            <h1>SIGNUP</h1>
            <p>join millions using resume world</p>
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
                <button disabled={isLoading} onClick={handleSignup}>SIGNUP</button>
            </div>
            {
                error && (
                <div class="message input-group">
                    <h5>{error}</h5>
                </div>
                )
            }
                        {
                isLoading && (
                <div class="message input-group">
                    <h5>...signing you up</h5>
                </div>
                )
            }
        </form>
    </div>
</div>
  )
}

export default Signup
