import { Link } from 'react-router-dom';
import male from '../images/male.jpg'
import female from '../images/female.jpg'

const Lay1 = ({resume}) => {

    return ( 
        <div class="main1">
        <div class="info">
            <h1>{resume.name.toUpperCase()} {resume.surname.toUpperCase()}</h1>
            <h2>{resume.talent.toUpperCase()}</h2>
            <div class="links">
                <Link to='/'>CONTACT ME</Link>
                <h3 className="btn">DOWNLOAD CV</h3>
            </div>
        </div>
        <div class="photo">
          <img src={resume.photo ? resume.photo : resume.gender === 'female' ? female : male} alt={resume.photo} />
        </div>
        <div class="about">
            <h1>ABOUT ME</h1>
            <div class="about-content">
                <p className='mainp'>{resume.about}</p>
                <p>AGE : {resume.age}</p>
                <p>RESIDENCE : {resume.country}</p>
                <p>PROVINCE : {resume.province}</p>
            </div>
        </div>
        <div class="hobbies-photo">
            <h1>HOBBIES</h1>
        </div>
        <div class="hobbies">
            <ul style={{listStyle: 'none'}}>
            {
                    JSON.parse(resume.hobbies).map((hob, i) =>(
                    <li key={i}>{hob}</li>
                    ))
                }
            </ul>
        </div>
        <div class="skills">
            <h1>SKILLS</h1>
            <ul style={{listStyle: 'none'}}>
            {
                    JSON.parse(resume.skills).map((skill, i) =>(
                    <li key={i}>{skill}</li>
                    ))
                }
            </ul>
        </div>
        <div class="work-experience-photo">
            <h1>WORK<br></br>EXPERIENCE</h1>
        </div>
        <div class="work-experience">
        {
                    JSON.parse(resume.workExperience).map((wrk) =>(
                        <div key={wrk.description} class="work-body">
                        <h1 style={{color: 'black'}}>{wrk.company}</h1>
                        <p>{wrk.workBeg} - {wrk.workEnd} </p>
                        <h3>DESCRIPTION:</h3>
                        <p>{wrk.description}</p>
                    </div>
                    ))
                }
        </div>
        <div class="education-photo">
            <h1>EDUCATION</h1>
        </div>
        <div class="education">
        {
                    JSON.parse(resume.education).map((edu) =>(
                        <div key={edu.educationBeg} class="education-body">
                        <h3>INSTUTUTE: {edu.institution}</h3>
                        <h4>{edu.educationBeg} - {edu.educationEnd}</h4>
                        <p>{edu.degree}</p>
                    </div>
                    ))
                }
        </div>
        <div class="contact" id="contact">
        <div class="contact-info">
                <h1>CONTACT INFO</h1>
                <div class="group">
                    <h2>NAME</h2>
                    <p>{resume.name}</p>
                </div>
                <div class="group">
                    <h2>EMAIL</h2>
                    <p>{resume.email}</p>
                </div>
                <div class="group">
                    <h2>CELL NUMBER</h2>
                        <p>{resume.cell}</p>
                </div>
            </div>
            <div class="social-info">
                <h1>SOCIAL INFO</h1>
                <h3>FACEBOOK</h3>
                <h3>TWITTER</h3>
                <h3>INSTAGRAM</h3>
            </div>
        </div>

    </div>
     );
}
 
export default Lay1;