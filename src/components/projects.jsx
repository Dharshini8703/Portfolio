import React, { useState } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import LoopIcon from "@mui/icons-material/Loop";
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

const projects = [
  { 
    name: "Simple E-commerce Website",
    description: "Built a responsive e-commerce platform with React.js and Express.js, featuring authentication, user registration, and seamless browsing. Integrated a product search feature for quick item discovery.",
    skill: "React.js, CSS, Express.js, Node.js, MySQL",
    link: "https://github.com/Dharshini8703/E-Commerce-Platform", 
    status: "Completed"
  },
  {
    name: "Property Finding Admin Panel",
    description: "Built a Property Finding Admin Panel with role-based access for agents, companies, and property owners. Enabled seamless property management with CRUD operations for listings.",
    skill: "React.js,Node.js,Express.js,MongoDB",
    link: "https://github.com/Dharshini8703/Property-Finding/tree/main/Property-Finding",
    status: "Completed"
  },
  { 
    name: "Portfolio",
    description: "Developed a responsive personal portfolio website using React.js to showcase my projects, skills, and contact details, ensuring a seamless and user-friendly experience.",
    skill: "React.js, CSS, MUI",
    link: "https://github.com/Dharshini8703/Portfolio",
    status: "Completed"
  },
  { 
    name: "Social Media Feed",
    description: "Developing a social media feed that dynamically displays posts from various users, allowing interactions through likes and comments. Implemented a responsive design for a smooth user experience.",
    skill: "React.js, MySQL, Express.js, Tailwind CSS",
    link: "https://github.com/Dharshini8703/Social-media-feed",
    status: "In Progress"
  },
  { 
    name: "Travel Blog",
    description: "Creating a travel blog exploring Tamil Nadu’s stunning landscapes, ancient temples, and vibrant culture. Highlighted must-visit places, local traditions, and unique experiences.",
    skill: "React.js, Tailwind CSS",
    link: "https://github.com/Dharshini8703/Travel_Blog",
    status: "In Progress"
  },
];

  const getSkillIcon = (skill) => {
    switch (skill.trim()) {
      case 'HTML5':
        return <img src={html5Icon} alt="HTML5" style={{ marginRight: '5px', width: '20px', height: '20px' }} />;
      case 'CSS':
        return <img src={cssIcon} alt="CSS" style={{ marginRight: '5px', width: '20px', height: '20px' }} />;
      case 'JavaScript':
        return <img src={jsIcon} alt="JavaScript" style={{ marginRight: '5px', width: '20px', height: '20px' }} />;
      case 'React.js':
        return <img src={reactjsIcon} alt="React.js" style={{ marginRight: '5px', width: '20px', height: '20px' }} />;
      case 'Node.js':
        return <img src={nodejsIcon} alt="Node.js" style={{ marginRight: '5px', width: '20px', height: '20px' }} />;
      case 'Express.js':
        return <img src={expressIcon} alt="Express.js" style={{ marginRight: '5px', width: '20px', height: '20px' }} />;
      case 'MySQL':
        return <img src={mysqlIcon} alt="MySQL" style={{ marginRight: '5px', width: '20px', height: '20px' }} />;
      case 'MongoDB':
        return <img src={mongoDb} alt="MongoDB" style={{ marginRight: '5px', width: '20px', height: '20px' }} />;
      case 'MUI':
        return <img src={muiIcon} alt="MUI" style={{ marginRight: '5px', width: '20px', height: '20px' }} />;
      case 'Tailwind CSS':
        return <img src={tailwind} alt="MUI" style={{ marginRight: '5px', width: '20px', height: '20px' }} />;
      case 'GitHub':
        return <img src={github} alt="GitHub" style={{ marginRight: '5px', width: '20px', height: '20px' }} />;
      case 'Python':
        return <img src={pythonIcon} alt="Python" style={{ marginRight: '5px', width: '20px', height: '20px' }} />;
      default:
        return null;
    }
  };

const Projects = ({ darkMode }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const isSmallScreen = window.innerWidth <= 768;

  const sectionStyle = {
    padding: "20px",
    maxWidth: "1150px",
    margin: "0 auto",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(330px, 1fr))",
    gap: "10px",
    justifyContent: "center",
  };

  const cardStyle = {
    position: "relative",
    height: "auto",
    padding: "15px",
    borderRadius: "8px",
    backgroundColor: darkMode ? "#0d1626" : "#fff",
    color: darkMode ? "#817b7b" : "#333",
    display: "flex",
    flexDirection: "column",
    transition: "all 0.3s ease",
    cursor: "pointer",
  };

  const githubIconStyle = {
    position: "absolute",
    top: "10px",
    right: "10px",
    fontSize: "24px",
    color: darkMode ? "#fff" : "#333",
  };

  const titleStyle = {
    fontWeight: "bold",
    fontSize: "17px",
    marginBottom: "5px",
  };

  const descriptionStyle = {
    marginTop: "5px",
    padding: "10px",
    // backgroundColor: "#386fcf",
    color: darkMode ? "#817b7b" : "#333",
    borderRadius: "8px",
    fontSize: "14px",
    textAlign: 'justify',
  };

  const getStatusStyle = (status) => ({
    display: "flex",
    alignItems: "center",
    gap: "8px",
    fontSize: "14px",
    fontWeight: "bold",
    padding: "4px 8px",
    borderRadius: "15px",
    width: "fit-content",
    backgroundColor: status === "Completed" ? "#E6F4EA" : "#FFF3CD",
    border: `2px solid ${status === "Completed" ? "#34A853" : "#FFC107"}`,
    color: status === "Completed" ? "#2E7D32" : "#856404",
    marginTop: "auto",
  });

  const getStatusIcon = (status) => (
    status === "Completed" 
      ? <CheckCircleIcon style={{ color: "#34A853" }} /> 
      : <LoopIcon style={{ color: "#FFC107" }} />
  );

  const skillStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "5px",
    marginTop: "10px",
    marginBottom: "10px",
  };

  return (
    <section id="projects" style={sectionStyle}>
      <h1 className='contact-title' style={{ fontSize: '32px' }}>PROJECTS</h1>
      <div style={gridStyle}>
        {projects.map((project, index) => (
          <div 
            key={index} 
            style={cardStyle}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <GitHubIcon style={githubIconStyle} />
            </a>
            <p style={titleStyle}>{project.name}</p>
            {isSmallScreen || hoveredIndex === index ? (
              <p style={descriptionStyle}>{project.description}</p>
            ) : 
            <>
            <div style={skillStyle}>
            {project.skill.split(',').map((skill) => (
              <span key={skill} style={{
                display: 'flex',
                alignItems: 'center',
                border: '1px solid grey',
                borderRadius: '10px',
                padding: "4px 10px",
                fontSize: '12px',
              }}>
                {getSkillIcon(skill)}{skill}
              </span>
            ))}
          </div>
        <div style={getStatusStyle(project.status)}>
            {getStatusIcon(project.status)}
            {project.status}
          </div>
            </>
          }

          {
            isSmallScreen && 
            <>
            <div style={skillStyle}>
            {project.skill.split(',').map((skill) => (
              <span key={skill} style={{
                display: 'flex',
                alignItems: 'center',
                border: '1px solid grey',
                borderRadius: '10px',
                padding: "4px 10px",
                fontSize: '12px',
              }}>
                {getSkillIcon(skill)}{skill}
              </span>
            ))}
          </div>
        <div style={getStatusStyle(project.status)}>
            {getStatusIcon(project.status)}
            {project.status}
          </div>
            </>
          }
            
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;