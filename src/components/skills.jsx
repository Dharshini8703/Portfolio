import React from 'react';
import '../App.css';  // Ensure this path is correct based on your project structure
import pythonIcon from '../assets/python.png'; 
import sqlIcon from '../assets/sql.png';
import mysqlIcon from '../assets/mysql.png';
import reactjsIcon from '../assets/react.png';
import html5Icon from '../assets/html.png';
import cssIcon from '../assets/css.png';
import nodejsIcon from '../assets/nodejs.png';
import powerbiIcon from '../assets/powerbi.png';
import excelIcon from '../assets/excel.png';
import azure from '../assets/azure.png';

// Skill data
const skills = [
  { name: 'Python', icon: pythonIcon },
  { name: 'SQL', icon: sqlIcon },
  { name: 'MySQL', icon: mysqlIcon },
  { name: 'Azure', icon: azure },
  { name: 'React.js', icon: reactjsIcon },
  { name: 'HTML5', icon: html5Icon },
  { name: 'CSS', icon: cssIcon },
  { name: 'Node.js', icon: nodejsIcon },
  { name: 'Power BI', icon: powerbiIcon },
  { name: 'Excel', icon: excelIcon },
];

function Skills({ darkMode }) {
  return (
    <section id="skills" className="skills-section">
      <div className={`contact-card${darkMode ? 'dark-mode-profile' : 'profile-light'}`}>
        <h2 className="skills-title" style={{fontSize: '32px'}}>SKILLS</h2>
        <div className="skills-container">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card ">
              <img src={skill.icon} alt={skill.name} className="skill-icon" />
              <p className="skill-name">{skill.name}</p>
            </div>
          ))}
        </div> 
      </div>
    </section>
  );
}

export default Skills;
