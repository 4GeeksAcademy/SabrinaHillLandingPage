import './App.css'
import Aboutme from './components/AboutMe'
import ContactInformation from './components/ContactInformation'
import EducationInformation from './components/EducationInformation'
import ExperienceInformation from './components/ExperienceInformation'
import ExpertiseInformation from './components/ExpertiseInformation'
import JobRole from './components/JobRole'
import Navbar from './components/Navbar'

function App() {
  
  return (
    <div class="container">
    <div className="two-columns-container">
      <div className="column" id="column1">
        <img src="/src/assets/SabrinaHill Profile Pic2023.png" id="profile" alt="Profile Pic"></img>
        <ContactInformation/>
        <EducationInformation/>
        <ExpertiseInformation/>
      </div>
      <div className="column" id="column2">
        <h1>Sabrina L. Hill</h1>
        <JobRole/>
        <Aboutme/>
        <ExperienceInformation/>
       </div>
      <div>
        <Navbar/>
      </div>
    </div>
    </div>

  )
}

export default App
