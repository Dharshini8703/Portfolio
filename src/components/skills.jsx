import React from 'react';
import '../App.css';  
import pythonIcon from '../assets/python.png'; 
import mysqlIcon from '../assets/mysql.png';
import reactjsIcon from '../assets/react.png';
import html5Icon from '../assets/html.png';
import cssIcon from '../assets/css.png';
import nodejsIcon from '../assets/nodejs.png';
import jsIcon from '../assets/js.png';
import expressIcon from '../assets/express1.png';
import muiIcon from '../assets/mui.png';
import github from '../assets/github1.png';
import mongoDb from '../assets/mongo.png';
import tailwind from '../assets/tailwind.png'

// Skill data
const skills = [
  { name: 'HTML5', icon: html5Icon },
  { name: 'CSS', icon: cssIcon },
  { name: 'JavaScript', icon: jsIcon },
  { name: 'React.js', icon: reactjsIcon },
  { name: 'Node.js', icon: nodejsIcon },
  { name: 'Express.js', icon: expressIcon },
  { name: 'MySQL', icon: mysqlIcon },
  { name: 'MongoDB', icon: mongoDb },
  { name: 'MUI', icon: muiIcon },
  { name: 'Tailwind CSS', icon: tailwind},
  { name: 'GitHub', icon: github },
  { name: 'Python', icon: pythonIcon },
];

function Skills({ darkMode }) {
  const sectionStyle = {
    padding: "20px",
    maxWidth: "1150px",
    margin: "0 auto",
  }; 

  return (
    <section id="skills" style={sectionStyle}>
      <h1 className='contact-title' style={{ fontSize: '32px', textAlign: 'center' }}>SKILLS</h1>
        <div className="skills-container">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <img src={skill.icon} alt={skill.name} className="skill-icon" />
              <p className="skill-name">{skill.name}</p>
            </div>
          ))}
        </div> 
    </section>
  );
}

export default Skills;
