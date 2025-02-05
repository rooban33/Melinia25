import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import './Contact.css';
import { Particle } from '../ParticlesBackground';
import { motion } from 'framer-motion'; // Import Framer Motion
import BlurText from '../BlurText';

const SERVICE_ID = "service_dqvz8pd";
const TEMPLATE_ID = "template_0atr5bz";
const PUBLIC_KEY = "o5lAfhX2jUPshde1J";

const Contact = () => {
  const [formData, setFormData] = useState({ from_name: '', from_email: '', message: '' });
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };
  
  const handleOnSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.from_name || !formData.from_email || !formData.message) {
      Swal.fire({
        icon: 'error',
        title: 'Ooops, Enter Data',
        text: 'Please fill all fields',
      });
      return;
    }
    
    if (!validateEmail(formData.from_email)) {
      Swal.fire({
        icon: 'error',
        title: 'Invalid Email',
        text: 'Please enter a valid email address',
      });
      return;
    }
    
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
      .then((result) => {
        console.log(result.text);
        Swal.fire({
          icon: 'success',
          title: 'Message Sent Successfully'
        });
      }, (error) => {
        console.log(error.text);
        Swal.fire({
          icon: 'error',
          title: 'Ooops, something went wrong',
          text: error.text,
        });
      });
    e.target.reset();
    setFormData({ from_name: '', from_email: '', message: '' });
  };

  return (
    <div>
      <Particle />
      <div className="hero-container">
        <div className="squid-bg"></div>
        <div className='hero-card'>
          <div className="app-title" style = {{fontFamily: "Main"}}>
            <BlurText
              text="Any Queries?"
              delay={150}
              animateBy="words"
              direction="top"
              className="text-2xl mb-8"
              style = {{fontFamily: "Main"}}
            />
          </div>

          <div className="screen-body-item">
            <form className="app-form" onSubmit={handleOnSubmit}>
              <div className="app-form-group">
                <input className="app-form-control" placeholder="NAME" name="from_name" value={formData.from_name} onChange={handleChange} />
              </div>
              <div className="app-form-group">
                <input className="app-form-control" placeholder="EMAIL" name="from_email" value={formData.from_email} onChange={handleChange} />
              </div>
              <div className="app-form-group message">
                <input className="app-form-control" placeholder="MESSAGE" name="message" value={formData.message} onChange={handleChange}></input>
              </div>
              <div className="app-form-group buttons">
                <button type="submit" className="app-form-button">SEND</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;