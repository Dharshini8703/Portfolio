import React from 'react';
import '../App.css';

const Experience = ({ darkMode }) => {
    const experiences = [
        {
            company: 'Trugo Technologies Pvt Ltd',
            title: 'Web Developer Intern',
            duration: 'April 2024 - June 2024',
            description: 'Gained hands-on experience with Node.js, React.js, MySQL, and Express.js, developing and optimizing web applications. Contributed to both frontend and backend development, managing MySQL databases for efficient data handling.',
        },
        {
            company: 'Accenture North America',
            title: 'Data Analytics and Visualization Job Simulation',
            duration: 'March 2024',
            description: 'Analyzed and modeled 7 datasets to uncover content trends, preparing a PowerPoint deck and video presentation to communicate insights for strategic decision-making.',
        },
    ];

    return (
        <section id="experience">
          <h1 className='contact-title'style={{fontSize: '32px'}}>EXPERIENCE</h1>
            
                <div className={`contact-card ${darkMode ? 'dark-mode-profile-card' : 'profile-card-light'}`}>
                
                    <div className='profile-details'>
                        {experiences.map((exp, index) => (
                            <div className='experiencee-item' key={index}>
                                <div className='timelinee-dot'></div>
                                <div className='experiencee-content'>
                                <p className='para year'>{exp.duration}</p>
                                    <h5 className='para'>{exp.company}</h5>
                                    <h6 className='para'>{exp.title} </h6>
                                    {exp.description && <p className='para'>{exp.description}</p>}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
          
        </section>
    );
};

export default Experience;
