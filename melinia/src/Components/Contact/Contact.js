import React from 'react';
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
  const handleOnSubmit = (e) => {
    e.preventDefault();
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
  };

  return (
    <div>
      <Particle />

      <div className="hero-container1">
        {/* Background Animation */}
        <div className="squid-bg"></div>
        <div className='hero-card1'>

        {/* Hero Card */}
        {/*<motion.div
          className="contactcontainer"
          initial={{ opacity: 0, scale: 0.5, y: -50 }} // Start small and above
          animate={{ opacity: 1, scale: 1, y: 0 }} // Animate to full size and center
          transition={{ duration: 1, ease: "easeOut" }} // Smooth transition
        >*/}
          {/* Title */}
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

          {/* Form */}
          <div className="screen-body-item">
            <form className="app-form" onSubmit={handleOnSubmit}>
              <div className="app-form-group">
                <input className="app-form-control" placeholder="NAME" name="from_name" />
              </div>
              <div className="app-form-group">
                <input className="app-form-control" placeholder="EMAIL" name="from_email" />
              </div>
              <div className="app-form-group message">
                {/*<textarea className="app-form-control" placeholder="MESSAGE" name="message" rows="4"></textarea>*/}
                <input className="app-form-control" placeholder="MESSAGE" name="message"></input>
              </div>
              <div className="app-form-group buttons">
                <button type="submit" className="app-form-button">SEND</button>
              </div>
            </form>
          </div>
        {/*</motion.div>*/}
        </div>
      </div>
    </div>
  );
};

export default Contact;
