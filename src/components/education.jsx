import React from 'react';
import '../App.css'; // Ensure this file contains your styling

const Education = ({ darkMode }) => {
    const experiences = [
        {
            education: 'Dhirajlal Gandhi College of Technology',
            study: 'Bachelor of Engineering ',
            year: '2020-2024',
            mark: '8.2',
            dept: 'Electronics and Communication Engineering',
        },
        {
            education: 'Sri Sarada Vidyalaya Higher Secondary School',
            study: 'HSC',
            year: '2019-2020',
            mark: '66.5%',
            dept: 'Maths Computer Science',
        },
        {
            education: 'Sri Sarada Vidyalaya Higher Secondary School',
            study: 'SSLC',
            year: '2017-2018',
            mark: '84.6%',
        },
    ];

    return (
        <section id="education">
            <h1 className='contact-title'style={{fontSize: '32px'}}>EDUCATION</h1>
            <div className={`contact-card ${darkMode ? 'dark-mode-profile-card' : 'profile-card-light'}`}>
                <div className='profile-details'>
                    {experiences.map((exp, index) => (
                        <div className='experiencee-item' key={index} >
                            <div className='timelinee-dot'></div>
                            <div className='experiencee-content'>
                                <p className='parae year'>{exp.year}</p>
                                <h5 className='education-name'>{exp.education}</h5>
                                <h5 className='job-year'>{exp.study}</h5>
                                {exp.dept && <p className='para'>{exp.dept}</p>}
                                {exp.mark && <p className='para'>{exp.mark}</p>}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
