import React from 'react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import './Contact.css';
import { Particle } from '../ParticlesBackground';

const SERVICE_ID = "service_ahi3duf";
const TEMPLATE_ID = "template_r4ya1dd";
const PUBLIC_KEY = "kjhxSKhqQ4DCCoy3Q";

const Contact = () => {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
      .then((result) => {
        console.log(result.text);
        Swal.fire({
          icon: 'success',
          title: 'Message Sent Successfully'
        })
      }, (error) => {
        console.log(error.text);
        Swal.fire({
          icon: 'error',
          title: 'Ooops, something went wrong',
          text: error.text,
        })
      });
    e.target.reset()
  };

  return (
  

  
  <>
  <Particle></Particle>
  {/* <div class="heading"> Feel free to ask</div> */}
  <div class="contactbackground">
  <div class="contactcontainer">
    <div class="screen">
      <div class="screen-header">
        <div class="screen-header-left">
          <div class="screen-header-button close"></div>
          <div class="screen-header-button maximize"></div>
          <div class="screen-header-button minimize"></div>
        </div>
        <div class="screen-header-right">
          <div class="screen-header-ellipsis"></div>
          <div class="screen-header-ellipsis"></div>
          <div class="screen-header-ellipsis"></div>
        </div>
      </div>
      <div class="screen-body">
        <div class="screen-body-item left">
          <div class="app-title">
            <span>ANY</span>
            <span>QUERIES?</span>
          </div>
         
        </div>
        <div class="screen-body-item" >
          <form class="app-form" onSubmit={handleOnSubmit}>
            <div class="app-form-group">
              <input class="app-form-control" placeholder="NAME" name="from_name" />
            </div>
            <div class="app-form-group">
              <input class="app-form-control" placeholder="EMAIL" name="from_email"/>
            </div>
            
            <div class="app-form-group message">
              <input class="app-form-control" placeholder="MESSAGE" name='message'/>
            </div>
            <div class="app-form-group buttons">
              
              <button type="submit" class="app-form-button">SEND</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    
  </div>
</div>
</>

  );
}

export default Contact;
