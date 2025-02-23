import React, { useEffect, useState, useRef } from 'react';
import '../App.css';
import { DarkModeOutlined, LightModeOutlined, PersonOutlineOutlined, ChecklistRtlOutlined, CardTravelOutlined, SchoolOutlined, 
  AssessmentOutlined, RateReviewOutlined, BusinessCenterOutlined } from '@mui/icons-material';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import profile from '../assets/profile1.jpeg';
import Skills from './skills';
import Experience from './experience';
import Education from './education';
import Contact from './contact';
import Projects from './projects';

const skills = ["MERN Stack Developer", "Web Developer", "Full Stack Developer", "Python"];

function Homepage() {
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => { 
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode', !darkMode);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const sectionStyle = {
      padding: '1px 0',
      maxWidth: "1150px",
      margin: "0 auto", 
    };
  
  
    const [currentText, setCurrentText] = useState("");
    const [skillIndex, setSkillIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
  
    useEffect(() => {
      if (charIndex < skills[skillIndex].length) {
        const timeout = setTimeout(() => {
          setCurrentText((prev) => prev + skills[skillIndex][charIndex]);
          setCharIndex(charIndex + 1);
        }, 30);
  
        return () => clearTimeout(timeout);
      } else {
        const waitTimeout = setTimeout(() => {
          setCurrentText(""); 
          setCharIndex(0);
          setSkillIndex((prevIndex) => (prevIndex + 1) % skills.length);
        }, 1500); 
        return () => clearTimeout(waitTimeout);
      }
    }, [charIndex, skillIndex]);

  return (
    <>
      <nav ref={navRef} className={`navbar fixed-top navbar-expand-lg ${darkMode ? 'navbar-dark bg-dark dark-mode-navbar' : 'navbar-light bg-light light-mode-navbar'}`}>
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" onClick={toggleMenu}>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse justify-content-center ${menuOpen ? 'show' : ''}`} id="navbarNav">
            <ul className="navbar-nav mb-2 mb-lg-0">
              {[
                { href: "#", icon: <PersonOutlineOutlined />, text: "ABOUT" },
                { href: "#skill", icon: <ChecklistRtlOutlined />, text: "SKILLS" },
                { href: "#experience", icon: <CardTravelOutlined />, text: "EXPERIENCE" },
                { href: "#education", icon: <SchoolOutlined />, text: "EDUCATION" },
                { href: "#projects", icon: <AssessmentOutlined />, text: "PROJECTS" },
                { href: "#contact", icon: <RateReviewOutlined />, text: "CONTACT" }
              ].map((item, index) => (
                <li className="nav-item me-3" key={index}>
                  <a className="nav-link" href={item.href} onClick={() => setMenuOpen(false)}>
                    {item.icon}{item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="form-check ms-auto">
            <span onClick={toggleDarkMode}>
              {darkMode ? <DarkModeOutlined style={{ cursor: 'pointer', color: '#386fcf' }} /> : <LightModeOutlined style={{ cursor: 'pointer', color: '#74a6db' }} />}
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
              <div className="icon-text" style={{ textAlign: "center" }}>
                <BusinessCenterOutlined className="icon" />
                <p className="para" style={{ marginTop: 15, minHeight: "20px" }}>
                  {currentText || "\u00A0"}
                </p>
              </div>
              <div className='icon-text'>
                <LocationOnOutlinedIcon className='icon' />
                <p className='para' style={{marginTop: 15}}>Tamil Nadu, India</p>
              </div>
              <p className='description' style={{marginTop: 10}}>
              A motivated Full stack developer with 6+ months of hands-on experience in building responsive
               web applications using JavaScript, React.js, Node.js, Express.js, MySQL, and MongoDB. Skilled in front-end and 
              back-end development, API integration, and deploying solutions.
              Passionate about learning new technologies and delivering high quality code. 
              Looking to contribute and grow in a collaborative development team.
              </p>
            </div>
            <div className='social-links profile-name'>
              <a href="https://github.com/Dharshini8703?tab=repositories" target="_blank" rel="noopener noreferrer"><GitHubIcon style={{ cursor: 'pointer',color:'#386fcf', marginLeft:10 }} /></a>
              <a href="https://www.linkedin.com/in/dharshini-chakravarthi" target="_blank" rel="noopener noreferrer"><LinkedInIcon style={{ cursor: 'pointer',color:'#386fcf', marginLeft:5 }} /></a>
              <a href="mailto:dharshinichakra2003@gmail.com"><EmailIcon style={{ cursor: 'pointer',color:'#386fcf', marginLeft:5 }} /></a>
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
