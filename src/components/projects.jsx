import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import LoopIcon from "@mui/icons-material/Loop";

const projects = [
  { 
    name: "Simple E-commerce Website",
    description: "Built a responsive e-commerce platform with React.js and Express.js, featuring authentication, user registration, and seamless browsing. Integrated a product search feature for quick item discovery.",
    skill: "React.js, CSS, Express.js, Node.js, MySQL",
    link: "https://github.com/Dharshini8703/E-Commerce-Frontend", 
    status: "Completed"
  },
  { 
    name: "Property Finding Admin Panel",
    description: "Built a Property Finding Admin Panel with role-based access for agents, companies, and property owners. Enabled seamless property management with CRUD operations for listings.",
    skill: "React.js,Node.js,Express.js,MongoDB,CSS",
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
    skill: "React.js, Express.js, MySQL, Node.js, MUI",
    link: "https://github.com/Dharshini8703/Social-media-feed",
    status: "In Progress"
  },
  { 
    name: "Travel Blog",
    description: "Creating a travel blog exploring Tamil Nadu’s stunning landscapes, ancient temples, and vibrant culture. Highlighted must-visit places, local traditions, and unique experiences.",
    skill: "React.js, Express.js, MySQL, Node.js, MUI",
    link: "https://github.com/Dharshini8703/Travel_Blog",
    status: "In Progress"
  },
];

function Projects({ darkMode }) {
  const sectionStyle = {
    padding: "20px",
    maxWidth: "1150px",
    margin: "0 auto",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "20px",
    justifyContent: "center",
  };

  const cardStyle = {
    height: "280px",
    padding: "15px",
    borderRadius: "8px",
    backgroundColor: darkMode ? "#0d1626" : "#fff",
    color: darkMode ? "#817b7b" : "#333",
    display: "flex",
    flexDirection: "column",
    position: "relative",
  };

  const githubIconStyle = {
    position: "absolute",
    top: "10px",
    right: "10px",
    fontSize: "24px",
    color: darkMode ? "#fff" : "#333",
  };

  const sectionTitleStyle = {
    textAlign: "center",
    fontSize: "32px",
    marginBottom: "20px",
    color: darkMode ? "#817b7b" : "#333",
  };

  const titleStyle = {
    fontWeight: "bold",
    fontSize: "18px",
    marginBottom: "5px",
  };

  const skillStyle = {
    marginTop: "10px",
    fontStyle: "italic",
    fontSize: "14px",
    color: darkMode ? "#b0b0b0" : "#666",
  };

  const descriptionStyle = {
    flex: "1", 
    fontSize: "14px",
    margin: "8px 0",
  };

  const getStatusStyle = (status) => ({
    display: "flex",
    alignItems: "center",
    gap: "8px",
    fontSize: "14px",
    fontWeight: "bold",
    padding: "0px 6px",
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

  return (
    <section id="projects" style={sectionStyle}>
      <h1 className='contact-title' style={{ fontSize: '32px' }}>PROJECTS</h1>
      <div style={gridStyle}>
        {projects.map((project, index) => (
          <div key={index} style={cardStyle}>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <GitHubIcon style={githubIconStyle} />
            </a>
            <p style={titleStyle}>{project.name}</p>
            <p style={descriptionStyle}>{project.description}</p>
            <p style={skillStyle}>Technologies: {project.skill}</p>
            <div style={getStatusStyle(project.status)}>
              {getStatusIcon(project.status)}
              {project.status}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
