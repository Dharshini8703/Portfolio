import React from 'react';
import '../App.css';

const Experience = ({ darkMode }) => {
    const experiences = [
        {
            company: 'Trugo Technologies Pvt Ltd',
            title: 'Full Stack Developer',
            duration: 'April 2024 - January 2025',
            description: [
                "Designed and developed end-to-end responsive web applications using Node.js, Express.js, React.js, MongoDB, and MySQL, ensuring seamless integration between front-end and back-end for optimal performance and scalability.",
                "Led the creation of dynamic, user-friendly interfaces in React.js, implementing efficient server-side logic with Node.js and Express.js, reducing application load times by 20%.",
                "Project: Created a secure admin panel with a RESTful API to manage contracts, implementing an MVC architecture. JWT used for authentication and role-based access control to ensure secure user interactions. The system enabled admins to create, update, and delete contracts efficiently."
            ]
        }
    ];

    const sectionStyle = {
        padding: "20px",
        maxWidth: "1150px",
        margin: "0 auto",
        textAlign: "center",
    };

    const cardStyle = (isDark) => ({
        backgroundColor: isDark ? "#0d1626" : "#fff",
        color: isDark ? "#817b7b" : "#333",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        marginBottom: "20px",
        textAlign: "left",
    });

    const titleStyle = {
        fontSize: "22px",
        fontWeight: "bold",
    };

    const durationStyle = {
        fontSize: "14px",
        color: "#666",
        marginBottom: "10px",
    };

    const listStyle = {
        paddingLeft: "20px",
    };

    return (
        <section id="experience" style={sectionStyle}>
            <h1 style={{ fontSize: '32px', marginBottom: '20px', textAlign: "center" }}>EXPERIENCE</h1>

            {experiences.map((exp, index) => (
                <div key={index} style={cardStyle(darkMode)}>
                    <p style={durationStyle}>{exp.duration}</p>
                    <h5 style={titleStyle}>{exp.company}</h5>
                    <h6>{exp.title}</h6>
                    <ul style={listStyle}>
                        {exp.description.map((point, i) => (
                            <li key={i} style={{ marginBottom: "8px" }}>{point}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </section>
    );
};

export default Experience;
