import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../App.css'; // Ensure this file contains your styling
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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const sendEmail = () => {
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData, 'YOUR_USER_ID')
      .then((result) => {
        console.log(result.text);
        setStatus('Message sent successfully!');
      }, (error) => {
        console.log(error.text);
        setStatus('Failed to send message. Please try again.');
      });
  };

  return (
    <section id="contact">
      <h1 className='contact-title' style={{ fontSize: '32px' }}>CONTACT</h1>
      <div className={`contact-card ${darkMode ? 'dark-mode-profile-card' : 'profile-card-light'}`}>
        <div className='contact-details'>
          <h2>Get in Touch</h2>
          <p>Fill in the form to start a conversation.</p>
          <div className='contact-info'>
            <div className='contact-item'>
              <LocationOn />
              <p style={{ marginTop: 20 }}>Tamil Nadu, India</p>
            </div>
            <div className='contact-item'>
              <Email />
              <p style={{ marginTop: 20 }}>dharshinichakra2003@gmail.com</p>
            </div>
          </div>
        </div>
        <form className='contact-form' onSubmit={(e) => { e.preventDefault(); sendEmail(); }}>
          <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
          <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} required />
          <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange} required></textarea>
          <button type="submit"><EmailIcon style={{ cursor: 'pointer', color: '#386fcf' }} /> Send a message</button>
        </form>
        {status && <p>{status}</p>}
      </div>
      <div className='social-links profile-name'>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer"><GitHubIcon style={{ cursor: 'pointer', color: '#386fcf' }} /></a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><LinkedInIcon style={{ cursor: 'pointer', color: '#386fcf' }} /></a>
        <a href="mailto:dharshinichakra2003@gmail.com"><EmailIcon style={{ cursor: 'pointer', color: '#386fcf' }} /></a>
      </div>
    </section>
  );
};

export default Contact;
