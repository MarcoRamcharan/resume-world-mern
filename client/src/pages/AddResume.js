import {useState} from 'react'
import '../css/addResume.css'
import ChooseLayout from '../components/ChooseLayout'
import {useAddResumePic} from '../hooks/useAddResumePic'
import {useAddResume} from '../hooks/useAddResume'
import uuid from 'react-uuid';


const AddResume = () => {

    const {error, loading, addResumePic} = useAddResumePic()
    const {error2, loading2, addResume} = useAddResume()

    const [photo, setPhoto] = useState('')
    const [degree, setDegree] = useState('')
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [gender, setGender] = useState('male')
    const [email, setEmail] = useState('')
    const [cell, setCell] = useState('')
    const [age, setAge] = useState('')
    const [talent, setTalent] = useState('')
    const [country, setCountry] = useState('')
    const [province, setProvince] = useState('')
    const [hobby, setHobby] = useState('')
    const [hobbies, setHobbies] = useState([])
    const [skill, setSkill] = useState('')
    const [skills, setSkills] = useState([])
    const [education, setEducation] = useState([])
    const [workExperience, setWorkExperience] = useState([])
    const [about, setAbout] = useState('')
    const [educationBeg, setEducationBeg] = useState('')
    const [educationEnd, setEducationEnd] = useState('')
    const [workBeg, setWorkBeg] = useState('')
    const [workEnd, setWorkEnd] = useState('')
    const [company, setCompany] = useState('')
    const [institution, setInstitutuion] = useState('')
    const [description, setDescription] = useState('')
    const [layout, setLayout] = useState('')
    const [errorMsg, setErrorMsg] = useState(false)

    const addHobby = (e) =>{
        e.preventDefault()
        if(hobby === ""){
            return
        }
        setHobbies( (prevState) => [...prevState, hobby])
        setHobby('')
        console.log(hobbies)
    }

    const addSkill = (e) =>{
        e.preventDefault()
        if(skill === ""){
            return
        }
        setSkills( (prevState) => [...prevState, skill])
        setSkill('')
        console.log(skills)
    }

    const addEducation = (e) =>{
        e.preventDefault()
        if(!educationBeg || !educationEnd || !institution || !degree){
            return
        }
        const newEducation = {
            educationBeg,educationEnd,institution, degree
        }
        setEducation( (prevState) => [...prevState, newEducation])
        setEducationBeg('')
        setEducationEnd('')
        setInstitutuion('')
        setInstitutuion('')
        setDegree('')
        console.log(education)
    }

    const deleteEducation = (i) =>{
        const newList = education.filter((edu, index) => i !== index)
        setEducation(newList)
        console.log(newList)
    }

    const addWork = (e) =>{
        e.preventDefault()
        if(!workBeg || !workEnd || !company || !description){
            return
        }
        const newWork = {
            workBeg, workEnd,company,description
        }
        setWorkExperience( (prevState) => [...prevState, newWork])
        setWorkBeg('')
        setWorkEnd('')
        setCompany('')
        setDescription('')
        console.log(workExperience)
    }

    const deleteWork = (i) =>{
        const newList = workExperience.filter((work, index) => i !== index)
        setWorkExperience(newList)
        console.log(newList)
    }


    const deleteHobby = (i) =>{
        const newList = hobbies.filter((hob, index) => i !== index)
        setHobbies(newList)
        console.log(newList)
    }

    const deleteSkill = (i) =>{
        const newList = skills.filter((hob, index) => i !== index)
        setSkills(newList)
        console.log(newList)
    }


    const setLay = (lay) =>{
      setLayout(lay)
    }


    const createCv = async (e) =>{
      e.preventDefault()

      if(!name || !surname || !age || !talent || !country ||
          !province || !hobbies || !skills || !education || 
          !workExperience || !about || !layout || !cell || !email || !gender ){
              setErrorMsg('please enter all fields')
      }

      else{
          const x = name.slice(0,3)
          const y = surname.slice(0,3)
          let tok1 = uuid()
          const tok2 = tok1.slice(0, 3)
          const token = x+y+tok2

          const data = {
              photo,name,surname,age,talent,country,province,hobbies : JSON.stringify(hobbies),
              skills: JSON.stringify(skills),education : JSON.stringify(education),workExperience : JSON.stringify(workExperience),about,token,layout,email,gender,cell
          }
          console.log('resdata', data)
          if(photo === ''){
            addResume(data)
          }else{
          addResumePic(data)
          }
      }
  }

  return (
    <div className="createResume">
        <h4 className="mainHeading">CREATE RESUME PAGE</h4>
        <div className="headings">
            <h2>COMPLETE FORM BELOW</h2>
            <p>All details will be in your resume</p>
        </div>
        <ChooseLayout setLay={setLay}/>
        <div className='layoutStatus'>
          <h2>layout status</h2>
          {layout && (
            <h5>{layout}</h5>
          )}
          {!layout && (
            <h5>no layout chosen</h5>
          )}
        </div>
        <div className="form">
            <form>
                <div className="personalInfo">
                    {
                    ( layout === 'layout1' || layout === 'layout2') &&
                    <div className="input-group">
                        <label>PHOTO</label>
                        <input 
                        id='file'
                        type="file" 
                        accept=".png, .jpg, .jpeg "
                        name="photo"
                        onChange={(e) => setPhoto(e.target.files[0])}
                        />
                    </div>
                    }
                    <div className="input-group">
                        <label>FIRSTNAME</label>
                        <input type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="input-group">
                        <label>LASTNAME</label>
                        <input type="text"
                        value={surname}
                        onChange={(e) => setSurname(e.target.value)}
                        />
                    </div>
                    <div className="input-group">
                        <label>AGE</label>
                        <input type="text"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        />
                    </div>
                    <div className="input-group">
                        <label>EMAIL</label>
                        <input type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="input-group">
                        <label>CELL</label>
                        <input type="text"
                        value={cell}
                        onChange={(e) => setCell(e.target.value)}
                        />
                    </div>
                    <div className="input-group">
                        <label>GENDER</label>
                        <select
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                        >
                            <option value="male">MALE</option>
                            <option value="female">FEMALE</option>
                        </select>
                    </div>
                </div>



                <div className="location">
                    <h3>LOCATION</h3>
                    <div className="input-group">
                        <label>COUNTRY</label>
                        <input type="text"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        />
                    </div>
                    <div className="input-group">
                        <label>PROVINCE</label>
                        <input type="text"
                        value={province}
                        onChange={(e) => setProvince(e.target.value)}
                        />
                    </div>
                </div>
                <div className="occupation">
                    <h3>TITLE</h3>
                    <h4>EG: accountant,engineer </h4>
                    <div className="input-group">
                        <label>OCCUPATION</label>
                        <input type="text"
                        value={talent}
                        onChange={(e) => setTalent(e.target.value)}
                />
                    </div>
                </div>



                <div className="hobbies">
                    <h3>HOBBIES</h3>
                    {
                        hobbies.length !== 0 ?  
                            hobbies.map((hob, i) => 
                                    <div key={i} className='hobbiesList'>
                                    <p>{hob}</p>
                                    <p
                                    className='delButton'
                                    onClick={() => {deleteHobby(i)}}
                                    >
                                    <i class="fa-solid fa-trash-can"></i>
                                    </p>
                                    </div>
                                )   
                        : <h6>no hobbies added</h6>
                    }
                    <div className="input-group">
                        <label>HOBBY</label>
                        <input type="text"
                        value={hobby}
                        onChange={(e) => setHobby(e.target.value)} 
                        />
                    </div>
                    <button
                    className='addToButton'
                     onClick={addHobby}>ADD HOBBY</button>
                </div>




                <div className="skills">
                    <h3>SKILLS</h3>
            {
                skills.length !== 0 ?  
                    skills.map((skill, i) => 
                         <div key={i} className='skillsList'>
                            <p>{skill}</p>
                            <p
                                className='delButton'
                                onClick={() => {deleteSkill(i)}}
                                >
                                <i class="fa-solid fa-trash-can"></i>
                            </p>

                        </div>
                        )
                        
                 : <h6>no skills added</h6>
            }
                    <div className="input-group">
                        <label>SKILL</label>
                        <input type="text"
                        value={skill}
                        onChange={(e) => setSkill(e.target.value)} 
                        />
                    </div>
                    <button
                    className='addToButton'
                     onClick={addSkill}>ADD SKILL</button>
                </div>




                <div className="education">
                    <h3>EDUCATION</h3>
                    {
                education.length !== 0 ?  
                    education.map((edu, i) => 
                         <div key={i} className='educations'>
                                <div>
                                    <p>INSTITUTE : {edu.institution}</p>
                                    <p>FROM : {edu.educationBeg} - {edu.educationEnd}</p>
                                    <p>DEGREE: {edu.degree}</p>
                                </div>
                                <h3
                                    className='delButton'
                                    onClick={() => {deleteEducation(i)}}
                                    >
                                    <i class="fa-solid fa-trash-can"></i>
                                </h3>
                        </div>
                        )
                        
                 : <h6>no education added</h6>
            }
                    <div className="input-group">
                        <label>INSTUTUTE</label>
                        <input type="text"
                        value={institution}
                        onChange={(e) => setInstitutuion(e.target.value)} 
                        />
                    </div>
                    <div className="input-group">
                        <label>FROM</label>
                        <input type="text"
                        value={educationBeg}
                        onChange={(e) => setEducationBeg(e.target.value)} 
                        />
                        <label style={{justifyContent: 'center'}}>TO</label>
                        <input type="text"
                        value={educationEnd}
                        onChange={(e) => setEducationEnd(e.target.value)} 
                        />
                    </div> 
                    <div className="input-group">
                        <label>DEGREE</label>
                        <input type="text"
                        value={degree}
                        onChange={(e) => setDegree(e.target.value)} 
                        />
                    </div>
                    <button
                     className='addToButton'
                     onClick={addEducation}>ADD EDUCATION</button>
                </div>





                <div className="work-experience">
                    <h3>WORK EXPERIENCE</h3>
                    {
                        workExperience.length !== 0 ?  
                            workExperience.map((we, i) => 
                                <div key={i} className='works'>
                                        <div>
                                            <p>COMPANY : {we.company}</p>
                                            <p>FROM : {we.workBeg} - {we.workEnd}</p>
                                            <p>DESCRIPTION: {we.description}</p>
                                        </div>
                                        <h3
                                            className='delButton'
                                            onClick={() => {deleteWork(i)}}
                                            >
                                            <i class="fa-solid fa-trash-can"></i>
                                        </h3>
                                </div>
                                )
                                
                        : <h6>no work work experience added</h6>
            }
                    <div className="input-group">
                        <label>COMPANY</label>
                        <input type="text"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)} 
                        />
                    </div>
                    <div className="input-group">
                        <label>FROM</label>
                        <input type="text"
                        value={workBeg}
                        onChange={(e) => setWorkBeg(e.target.value)} 
                        />
                        <label style={{justifyContent:'center'}}>TO</label>
                        <input type="text"
                        value={workEnd}
                        onChange={(e) => setWorkEnd(e.target.value)} 
                        />
                    </div> 
                    <div className="input-group">
                        <label>DESCRIPTION</label>
                        <input type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                    <button
                     className='addToButton'
                     onClick={addWork}>ADD WORK</button>
                </div>



                <div className="about">
                    <h3>WRITE A PARAGRAPH ABOUT YOURSELF</h3>
                    <p>This will appear in the about section</p>
                    <textarea
                    value={about}
                    onChange={(e) => setAbout(e.target.value)}  
                    ></textarea>
                </div>

            </form>
        </div>
        <div className="submit">
            <button onClick={createCv} disabled={loading || loading2} className='submitButton'>SUBMIT CV</button>
            {(loading || loading2) && (
                <p>creating resume</p>
            )}
            { (error || error2) && (<div className="message">
                <p>{error}</p>
                <p>{error2}</p>
            </div>)}
            { errorMsg && (<div className="message">
                <p>{errorMsg}</p>
            </div>)}
        </div>
    </div>
  )
}

export default AddResume
