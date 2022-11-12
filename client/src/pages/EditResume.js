import {useEditResume} from '../hooks/useEditResume'
import {useEditResumePic} from '../hooks/useEditResumePic'
import ChooseLayout from '../components/ChooseLayout'
import {useAuthContext} from '../hooks/useAuthContext'
import {useEffect, useState, useCallback} from 'react'
import '../css/editResume.css'


const EditResume = () => {

    const {error, loading, editResume} = useEditResume()
    const {error2, loading2, editResumePic} = useEditResumePic()
  
    const {resume_user} = useAuthContext()
    const [photo, setPhoto] = useState('')
    const [degree, setDegree] = useState('')
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [gender, setGender] = useState('')
    const [email, setEmail] = useState('')
    const [cell, setCell] = useState('')
    const [age, setAge] = useState('')
    const [talent, setTalent] = useState('')
    const [country, setCountry] = useState('')
    const [province, setProvince] = useState('')
    const [hobby, setHobby] = useState('')
    const [hobbies, setHobbies] = useState('')
    const [skill, setSkill] = useState('')
    const [skills, setSkills] = useState('')
    const [education, setEducation] = useState('')
    const [workExperience, setWorkExperience] = useState('')
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
    const [token, setToken] = useState('')
    const [_id, setId] = useState('')
  
    const getResume = useCallback( async () => {
      try{
          const res = await fetch(`/api/resume/getResume`,{
              method: 'GET',
              headers: {
                'Authorization': `Bearer ${resume_user.token}`,
                'Content-Type' : 'application/json'
            },
          })
            const json = await res.json()
            console.log('success gotresueme', json)
            setPhoto(json.photo)
            setName(json.name)
            setSurname(json.surname)
            setAge(json.age)
            setGender(json.gender)
            setHobbies(json.hobbies)
            setEmail(json.email)
            setCell(json.cell)
            setTalent(json.talent)
            setProvince(json.province)
            setCountry(json.country)
            setHobbies(json.hobbies)
            setSkills(json.skills)
            setEducation(json.education)
            setWorkExperience(json.workExperience)
            setLayout(json.layout)
            setAbout(json.about)
            setToken(json.token)
            setId(json._id)
      }catch(error){
        console.log(error)
      }
  } ,[resume_user])
  
      useEffect(()=>{
          getResume()
      },[getResume])


      const addHobby = (e) =>{
        e.preventDefault()
        setHobbies( (prevState) => [...prevState, hobby])
        setHobby('')
        console.log(hobbies)
    }

    const addSkill = (e) =>{
        e.preventDefault()
        setSkills( (prevState) => [...prevState, skill])
        setSkill('')
        console.log(skills)
    }

    const addEducation = (e) =>{
        e.preventDefault()
        const newEducation = {
            educationBeg,educationEnd,institution, degree
        }
        setEducation( (prevState) => [...prevState, newEducation])
        setEducationBeg('')
        setEducationBeg('')
        setInstitutuion('')
        console.log(education)
    }

    const deleteEducation = (i) =>{
        const newList = education.filter((edu, index) => i !== index)
        setEducation(newList)
        console.log(newList)
    }

    const addWork = (e) =>{
        e.preventDefault()
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
        alert(lay)
      setLayout(lay)
    }


    const editCv = async (e) =>{
        e.preventDefault()
        if(!name || !surname || !age || !talent || !country ||
            !province || !hobbies || !skills || !education || 
            !workExperience || !about || !layout || !cell || !email || !gender ){
                setErrorMsg('all fileds must be filled')
        }
        else{
            const data = {
                photo,name,surname,age,talent,country,province,hobbies,
                skills,education,workExperience,about,token,layout,email,gender,cell,_id
            }
            console.log('updated data', data)
            if(photo === ''){
              editResume(data)
            }else{
            editResumePic(data)
            }
        }
    }



    return ( 
      <div className="editResume">
      <h1 className="mainHeading">EDIT RESUME PAGE</h1>
      <div className="headings">
          <h2>EDIT FORM BELOW</h2>
          <p>All details will be edited in your resume</p>
      </div>
      <ChooseLayout setLay={setLay}/>
      <div>
        <h1>layout status</h1>
        {layout && (
          <h1>{layout}</h1>
        )}
        {!layout && (
          <h3>no layout chosen</h3>
        )}
      </div>
      <div className="form">
          <form>
              <div className="personalInfo">
                  <div className="input-group">
                      <label>REPLACE PHOTO</label>
                      <input 
                      type="file" 
                      accept=".png, .jpg, .jpeg "
                      name="photo"
                      onChange={(e) => setPhoto(e.target.files[0])}
          />
                  </div>
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
                      <input type="text"
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                      />
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
                                  <button onClick={() => {deleteHobby(i)}}>DELETE</button>
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
                  <button onClick={addHobby}>ADD HOBBY</button>
              </div>




              <div className="skills">
                  <h3>SKILLS</h3>
          {
              skills.length !== 0 ?  
                  skills.map((skill, i) => 
                       <div key={i} className='skillsList'>
                          <p>{skill}</p>
                          <button onClick={() => {deleteSkill(i)}}>DELETE</button>
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
                  <button onClick={addSkill}>ADD SKILL</button>
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
                              <button onClick={() => {deleteEducation(i)}}>DELETE</button>
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
                  <button onClick={addEducation}>ADD EDUCATION</button>
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
                                      <button onClick={() => {deleteWork(i)}}>DELETE</button>
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
                  <button onClick={addWork}>ADD WORK</button>
              </div>



              <div className="about">
                  <h2>WRITE A PARAGRAPH ABOUT YOURSELF</h2>
                  <p>This will appear in the about section</p>
                  <textarea
                  value={about}
                  onChange={(e) => setAbout(e.target.value)}  
                  ></textarea>
              </div>

          </form>
      </div>
      <div className="submit">
          <button onClick={editCv} disabled={loading || loading2} className='submitButton'>EDIT CV</button>
          {(loading || loading2) && (
              <h3>editing your resume</h3>
          )}
          { (error || error2) && (<div className="message">
              <h3>{error}</h3>
              <h3>{error2}</h3>
          </div>)}
          { errorMsg && (<div className="message">
              <h3>{errorMsg}</h3>
          </div>)}
      </div>
  </div>
  )
}

 
export default EditResume;