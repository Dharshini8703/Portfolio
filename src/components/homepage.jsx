import React, { useState } from 'react';
import '../App.css';
import { DarkModeOutlined, LightModeOutlined, PersonOutlineOutlined, ChecklistRtlOutlined, CardTravelOutlined, SchoolOutlined, 
  AssessmentOutlined, RateReviewOutlined, BusinessCenterOutlined } from '@mui/icons-material';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import profile from '../assets/profile.jpeg';
import Skills from './skills';
import Experience from './experience';
import Education from './education';
import Contact from './contact';
import Projects from './projects';

function Homepage() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => { 
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode', !darkMode);
  };

  // Style for reducing space between sections
  const sectionStyle = {
    padding: '1px 0', // Adjust this to control the space. Reduced from larger values like 80px or 100px.
  };

  return (
    <>
      <nav className={`navbar fixed-top navbar-expand-lg ${darkMode ? 'navbar-dark bg-dark dark-mode-navbar' : 'navbar-light bg-light light-mode-navbar'}`}>
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item me-3">
                <a className="nav-link" href=""><PersonOutlineOutlined />ABOUT</a>
              </li>
              <li className="nav-item me-3">
                <a className="nav-link" href="#skill"><ChecklistRtlOutlined />SKILLS</a>
              </li>
              <li className="nav-item me-3">
                <a className="nav-link" href="#experience"><CardTravelOutlined />EXPERIENCE</a>
              </li>
              <li className="nav-item me-3">
                <a className="nav-link" href="#education"><SchoolOutlined />EDUCATION</a>
              </li>
              <li className="nav-item me-3">
                <a className="nav-link" href="#projects"><AssessmentOutlined />PROJECTS</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact"><RateReviewOutlined />CONTACT</a>
              </li>
            </ul>
          </div>
          <div className="form-check ms-auto">
            <span onClick={toggleDarkMode}>
              {darkMode ? <DarkModeOutlined style={{ cursor: 'pointer',color:'#386fcf' }} /> : <LightModeOutlined style={{ cursor: 'pointer',color:'#74a6db'  }} />}
            </span>
          </div>
        </div>
      </nav>
      <section id="about" style={sectionStyle}>
        <div className='content-container'>
          <div className={`profile-card ${darkMode ? 'dark-mode-profile-card' : 'profile-card-light'}`}>
            <img src={profile} alt="Profile" className="profile-img" />
            <h1 className='profilee-name'>Dharshini Chakravarthi</h1>
            <div className='profile-details'>
              <div className='icon-text'>
                <BusinessCenterOutlined className='icon' />
                <p className='para' style={{marginTop:20}}>Python, Web Development, Data Analysis, SQL, Power BI</p>
              </div>
              <div className='icon-text'>
                <LocationOnOutlinedIcon className='icon' />
                <p className='para' style={{marginTop:20}}>Tamil Nadu, India</p>
              </div>
              <p className='description'>
              Motivated and detail-oriented recent graduate with hands-on experience from a web developer internship, 
              seeking an entry-level position to leverage my skills and knowledge in a dynamic and growth-oriented organization.
               Eager to contribute effectively while gaining valuable professional experience and advancing my career.
              </p>
            </div>
            <div className='social-links profile-name'>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer"><GitHubIcon style={{ cursor: 'pointer',color:'#386fcf' }} /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><LinkedInIcon style={{ cursor: 'pointer',color:'#386fcf' }} /></a>
              <a href="mailto:dharshinichakra2003@gmail.com"><EmailIcon style={{ cursor: 'pointer',color:'#386fcf' }} /></a>
            </div>
          </div>
        </div>
      </section>
      <section id="skill" style={sectionStyle}>
        <Skills darkMode={darkMode}/>
      </section>
      <section id="experience" style={sectionStyle}>
        <Experience darkMode={darkMode} />
      </section>
      <section id="education" style={sectionStyle}>
        <Education darkMode={darkMode}/>
      </section>
      <section id="projects" style={sectionStyle}>
        <Projects darkMode={darkMode}/>
      </section>
      <section id="contact" style={sectionStyle}>
        <Contact darkMode={darkMode}/>
      </section>
    </>
  );
}

export default Homepage;
