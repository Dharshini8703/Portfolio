import React from 'react';
import '../App.css';

const Education = ({ darkMode }) => {
    const experiences = [
        {
            study: 'Dhirajlal Gandhi College of Technology',
            education: 'Bachelor of Engineering',
            year: '2020-2024',
            mark: '8.2',
            dept: 'Electronics and Communication Engineering',
        },
        {
            study: 'Sri Sarada Vidyalaya Higher Secondary School',
            education: 'HSC',
            year: '2019-2020',
            mark: '66.5%',
            dept: 'Maths Computer Science',
        },
        {
            study: 'Sri Sarada Vidyalaya Higher Secondary School',
            education: 'SSLC',
            year: '2017-2018',
            mark: '84.6%',
        },
    ];

    const sectionStyle = {
        padding: "20px",
        maxWidth: "1150px",
        margin: "0 auto",
        textAlign: "center",
    };

    const containerStyle = {
        gap: "20px",  // Space between each item
        display: "grid",  // Use grid layout
        gridTemplateColumns: "1fr",  // Forces 1 column per row
        justifyContent: "center",  // Centers the items horizontally
        width: "100%",  // Ensure the container takes up full width of parent container
      };
      
      const itemStyle = {
        minWidth: "330px",  // Set a fixed width for each item
        maxWidth: "330px",  // Ensure the width doesn't exceed 330px
        width: "330px",     // Set exact width for each item
      };
      
      

    const cardStyle = (isDark) => ({
        width: "100%", 
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        backgroundColor: isDark ? "#0d1626" : "#fff",
        color: isDark ? "#817b7b" : "#333",
        textAlign: "left",
        position: "relative",
        minWidth: "330px",  // Set a fixed width for each item
        // maxWidth: "330px",  // Ensure the width doesn't exceed 330px
        // width: "330px", 
    });

    const headerStyle = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontWeight: "bold",
        marginBottom: "5px",
    };

    const studyStyle = {
        fontSize: "18px",
        fontWeight: "bold",
        margin: "5px 0",
    };

    const gridStyle = {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(330px, 1fr))",
        gap: "10px",
        justifyContent: "center",
      };

    return (
        <section id="education" style={sectionStyle}>
            <h1 style={{ fontSize: '32px', marginBottom: '20px' }}>EDUCATION</h1>
            <div style={containerStyle}>
                {experiences.map((exp, index) => (
                    <div key={index} style={cardStyle(darkMode)}>
                        <div style={headerStyle}>
                            <span>{exp.education} </span>
                            
                            <span style={{ marginLeft: "auto", fontSize: "14px", color: "#666" }}>{exp.year}</span>
                        </div>
                        {exp.dept && <span>{exp.dept}</span>}
                        <p style={studyStyle}>{exp.study}</p>
                        {exp.mark && <p>Marks: {exp.mark}</p>}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Education;
