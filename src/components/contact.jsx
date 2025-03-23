import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../App.css';
import { Email, LocationOn } from '@mui/icons-material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';



const Contact = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  // const handleChange = (e) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value
  //   });
  // };
  
  // const sendEmail = () => {
  //   const serviceId = import.meta.env.VITE_EMAIL;
  //   // const templateId = import.meta.env.VITE_TEMPLATE_ID;
  //   const userId = import.meta.env.VITE_EMAIL_PASSWORD; // Example usage
  
  //   emailjs.send(serviceId, formData, userId)
  //     .then((result) => {
  //       console.log(result.text);
  //       setStatus('Message sent successfully!');
  //     })
  //     .catch((error) => {
  //       console.log(error.text);
  //       setStatus('Failed to send message. Please try again.');
  //     });
  // };
  
  const sectionStyle = {
    padding: "20px",
    maxWidth: "1150px",
    margin: "0 auto",
  };
  
  const gridStyle = {
    gap: "20px",  // Space between each item
    display: "grid",  // Use grid layout
    gridTemplateColumns: "1fr",  // Forces 1 column per row
    justifyContent: "center",  // Centers the items horizontally
    width: "100%",
  };

  return (
    <section id="contact" style={sectionStyle}>
      <h1 className='contact-title' style={{ fontSize: '32px' }}>CONTACT</h1>
      <div style={gridStyle}>
      <div className={`contact-card ${darkMode ? 'dark-mode-profile-card' : 'profile-card-light'}`}>
      {/* <div className="contact-card"> */}
  {/* Left Section - "To Get in Touch" */}
  <div className="contact-details">
    <h4>Mail me to get in touch</h4>
  </div>

  {/* Center Section - Email */}
  <div className="contact-item">
    <Email />
    <p style={{ marginLeft: 10, marginTop: 15, fontSize: '17px' }}>dharshinichakra2003@gmail.com</p>
  </div>
{/* </div> */}

        {/* <form className='contact-form' onSubmit={(e) => { e.preventDefault(); sendEmail(); }}>
          <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
          <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} required />
          <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange} required></textarea>
          <button type="submit"><EmailIcon style={{ cursor: 'pointer', color: '#386fcf' }} /> Send a message</button>
        </form> */}
        {/* {status && <p>{status}</p>} */}
      </div>
      <div className='social-links profile-name' style={{ marginTop: 20, marginLeft: 10}}>
        <a href="https://github.com/Dharshini8703" target="_blank" rel="noopener noreferrer"><GitHubIcon style={{ cursor: 'pointer',color:'#386fcf' }} /></a>
        <a href="https://www.linkedin.com/in/dharshini-chakravarthi" target="_blank" rel="noopener noreferrer"><LinkedInIcon style={{ cursor: 'pointer',color:'#386fcf', marginLeft:50 }} /></a>
        <a href="mailto:dharshinichakra2003@gmail.com"><EmailIcon style={{ cursor: 'pointer',color:'#386fcf', marginLeft:50 }} /></a>
      </div>
      </div>
    </section>
  );
};

export default Contact;
