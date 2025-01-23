import React from 'react';

const skills = [
  { 
    name: 'Smart City Waste Management System',
    description:'Developed a system with connected trash cans to prevent garbage overflow in the city.',
    skill:'Python, WoWki, IBM Cloud platforms',
  },
  { 
    name: 'A Multi-Parameter Bus Management System',
    description:'This is a simulation for managing multiple parameters in a bus management system using LabVIEW.',
    skill:'LabVIEW, Proteous',
  },
  { 
    name: 'E-commerce Website',
    description:'Built a responsive e-commerce platform with product listings, user authentication, and a shopping cart.',
    skill:'React.js, Express.js and MySQL.',
  },
  { 
    name: 'Portfolio',
    description:'Developed a responsive personal portfolio website using React.js, showcasing my projects, skills, and contact information.',
    skill:'React js, CSS.',
  },
];

function Projects({ darkMode }) {
  // Inline styles
  const sectionStyle = {
    padding: '20px',
    maxWidth: '1150px',
    margin: '0 auto',
  };

  const containerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '15px',
    justifyContent: 'space-between',
  };

  const cardStyle = {
    flex: '0 1 calc(50% - 15px)', // Takes 50% of the width with some space for gap
    // border: '1px solid #ddd',
    padding: '15px',
    borderRadius: '8px',
    backgroundColor: darkMode ? '#0d1626' : '#fff',
    color: darkMode ? '#817b7b' : '#333',
  };

  const rowStyle = {
    display: 'flex',
    marginBottom: '10px',
  };

  const titleStyle = {
    fontWeight: 'bold',
    width: '30%', // Fixed width for titles to align consistently
    color: darkMode ? '#817b7b' : '#333',
  };

  const detailStyle = {
    width: '70%', // Takes the remaining space beside the title
  };

  const sectionTitleStyle = {
    textAlign: 'center',
    fontSize: '32px',
    marginBottom: '20px',
    color: darkMode ? '#817b7b' : '#333',
  };

  return (
    <section id="projects" style={sectionStyle}>
      <div>
        <h2 style={sectionTitleStyle}>PROJECTS</h2>
        <div style={containerStyle}>
          {skills.map((skill, index) => (
            <div key={index} style={cardStyle}>
              <div style={rowStyle}>
                <p style={titleStyle}>Title:</p>
                <p style={detailStyle}>{skill.name}</p>
              </div>
              <div style={rowStyle}>
                <p style={titleStyle}>Description:</p>
                <p style={detailStyle}>{skill.description}</p>
              </div>
              <div style={rowStyle}>
                <p style={titleStyle}>Skills:</p>
                <p style={detailStyle}>{skill.skill}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
