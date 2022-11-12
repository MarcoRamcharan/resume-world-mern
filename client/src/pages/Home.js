import xx from '../images/xx.png'
import red from '../images/red.png'
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import '../css/Banner.css'
import '../css/how.css'

function Home() {

  const [val, setVal] = useState('')
  const [error, setError] = useState('no error')
  const [opacity, setOpacity] = useState('0')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const viewCv = async(e) =>{
    e.preventDefault()
    if(!val){
      setOpacity('1')
      setError('please enter token')
    }else{
      try{
        setOpacity('1')
        setLoading(true)
      const res = await fetch(`/api/getResume/${val}`,{
          method: 'GET',
      })
        const json = await res.json()
        console.log(json)
        if(json !== false){
          navigate(`/resume/${val}`)
          setLoading(false)
        }else{
          setLoading(false)
          setOpacity('1')
          setError('no resume this token')
          console.log('no resume token')
        }
    }catch(error){
      console.log(error)
      setError(error)
      setLoading(false)
    }
  }
}

    
  return (
    <div class="home">
    <div class='banner'>
      <div class="pic"></div>
        <div class="heading">
        <h1>RESUME WORLD</h1>
        <h2>WHERE THE WORLD VIEWS RESUMES</h2>
        </div>
        <div class="search">
          <form>
            <h2>ENTER A RESUME URL</h2>
            <p>url provided by applicant</p>
            <div class="search-input-group">
              <input type="text"
              value={val}
              onChange={(e) => setVal(e.target.value)}
              onFocus={()=> {setOpacity('0'); setError(false)}}
              />
              <button onClick={viewCv}>SEARCH</button>
            </div>
          </form>
          <div style={{opacity:opacity}} className="box">
            {error && 
              <p>{error}</p>
            }
            {
              loading && 
              <p>...getting resume</p>
            }
          </div>
        </div>
    </div>
      <div id='how' class='how'>
        <div class="how-photo">
          <img src={xx} alt="kjgh"/>
        </div>
        <div class="how-content">
          <h1>HOW TO USE RESUME WORLD</h1>
          <div class="steps">
          <p>1.SIGNUP</p>
          <p>2.ENTER YOUR DETAILS</p>
          <p>3.CLICK OF A BUTTON YOUR RESUME IS ONLINE</p>
          <p>4.PROVIDE YOUR UINQUE LINK TO EMPLOYER</p>
          <p>5.ENTER URL IN FORM ABOVE AND VIEW RESUME</p>
          </div>
        </div>
      </div>
      <div id='about' class='about'>
        <div class='about-content'>
        <h1>ABOUT US</h1>
        <img src={red} height='100px' width='100px' alt="oijyoty"/>
        <p>Resume World is a startup that is dedicated to the people.</p>
        <p>We are a company that helps job seekers easily create an online resume quickly.</p>
        <p>All resumes on Resume World are available publicly.</p>
        </div>
      </div>
  </div>
  );
}

export default Home;