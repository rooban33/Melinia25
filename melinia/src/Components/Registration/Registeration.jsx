import React, { useState } from 'react';
import {
  MDBRow,
  MDBCol,
  MDBInput,
  MDBRadio,
  MDBBtn
} from 'mdb-react-ui-kit';
import './Registeration.css';
import { Particle } from '../ParticlesBackground';
import { Modal, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import mixpanel from "mixpanel-browser";
import Preloader from "../../Components/Pre";
export default function Gforms() {

  const [show, setShow] = useState(true); // Show modal on render
  const [load, setLoad] = useState(false);
  const navigate = useNavigate();

  const handleClose = () => {
    setShow(false);
    navigate("/"); // Redirect to home
  };

  const [formData, setFormData] = useState({
    email: '',
    mobile: '',
    firstName: '',
    lastName: '',
    gender: '',
    institute: '',
    course: '',
    specialization: '',
    yearOfStudy: '',
    graduatingYear: '',
    foodPreference: ''
  });

  const [showPopup, setShowPopup] = useState(false);

  const handleRegisterClick = () => {
    mixpanel.track("Register button clicked", { page: "home" });

    return new Promise(async (resolve, reject) => {
      try {
        const response = await fetch("https://payment-r2hu.onrender.com/create-order", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ amount: 250, currency: "INR" }),
        });

        const orderData = await response.json();

        const options = {
          key: "rzp_live_XFYQBsd1zDxiWw",
          amount: orderData.amount,
          currency: orderData.currency,
          order_id: orderData.id,
          name: "MELINIA 2K25",
          description: "Registration Fee",
          handler: function () {
            resolve(true); // Resolve the promise on successful payment
          },
        };

        const razorpay = await loadRazorpay();
        const rzp = new window.Razorpay(options);
        rzp.open();
      } catch (error) {
        console.error("Error creating order:", error);
        reject(false);
      } finally {
        setLoad(false); // Hide loader
      }
    });
  };


  const loadRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      document.body.appendChild(script);
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    setLoad(true);

    const paymentSuccess = await handleRegisterClick();

    if (paymentSuccess) {
      // Construct form data
      const formDataObj = new FormData();
      formDataObj.append("entry.1191433481", formData.email);
      formDataObj.append("entry.1314378005", formData.mobile);
      formDataObj.append("entry.1493743491", formData.firstName);
      formDataObj.append("entry.830723680", formData.lastName);
      formDataObj.append("entry.534467670", formData.gender);
      formDataObj.append("entry.44250385", formData.institute);
      formDataObj.append("entry.1322569869", formData.course);
      formDataObj.append("entry.1415842802", formData.specialization);
      formDataObj.append("entry.1681341619", formData.yearOfStudy);
      formDataObj.append("entry.701360953", formData.graduatingYear);
      formDataObj.append("entry.1324628010", formData.foodPreference);

      try {
        await fetch(
          "https://docs.google.com/forms/d/e/1FAIpQLSf3fGWJ4gXtAfo9aDpuXFPt1kXPoEHf4c_qW0cVuomHDBmLAA/formResponse",
          {
            method: "POST",
            body: formDataObj,
            mode: "no-cors", // Required for Google Forms
          }
        );
        setShowPopup(true);
        resetForm();
      } catch (error) {
        console.error("Error submitting Google Form:", error);
      }
    }
  };

  const resetForm = () => {
    setFormData({
      email: '',
      mobile: '',
      firstName: '',
      lastName: '',
      gender: '',
      institute: '',
      course: '',
      specialization: '',
      yearOfStudy: '',
      graduatingYear: '',
      foodPreference: ''
    });
  };





  return (
    <>
      <Preloader load={load} />
      <Particle />
      <div className="hero-container6">
        <div className="squid-bg6"></div>
        <div className="hero-card6">
          <h2 className="form-title">Register</h2>
          <form className="text-white" onSubmit={handleSubmit}>
            <label className='bottom'>Email</label>
            <MDBInput placeholder='Enter Email' name="email" onChange={handleChange} className="mb-3 blurred-input" required />
            <label className='bottom'>Mobile Number</label>
            <MDBInput placeholder='Enter Mobile Number' name="mobile" onChange={handleChange} className="mb-3 blurred-input" required />
            <label className='bottom'>First Name</label>
            <MDBInput placeholder='Enter First Name' name="firstName" onChange={handleChange} className="mb-3 blurred-input" required />
            <label className='bottom'>Last Name</label>
            <MDBInput placeholder='Enter Last Name' name="lastName" onChange={handleChange} className="mb-3 blurred-input" required />

            <div className="mb-3">
              <label style={{ marginRight: "10px" }} >Gender: </label>
              <MDBRadio name="gender" value="Male" label="Male" onChange={handleChange} inline required />
              <MDBRadio name="gender" value="Female" label="Female" onChange={handleChange} inline required />
            </div>

            <label className='bottom'>Institute Name</label>
            <MDBInput placeholder='Enter Institute Name' name="institute" onChange={handleChange} className="mb-3 blurred-input" required />
            <label className='bottom'>Course</label>
            <MDBInput placeholder='Enter Course Name' name="course" onChange={handleChange} className="mb-3 blurred-input" required />
            <label className='bottom'>Specialization</label>
            <MDBInput placeholder='Enter Specialization' name="specialization" onChange={handleChange} className="mb-3 blurred-input" required />

            <div className="mb-3">
              <label className='bottom'>Year of Study</label>
              <select placeholder='Enter Year of Study' name="yearOfStudy" onChange={handleChange} className="form-control blurred-input" required>
                <option value="">Select Year</option>
                <option value="I">I</option>
                <option value="II">II</option>
                <option value="III">III</option>
                <option value="IV">IV</option>
                <option value="V">V</option>
              </select>
            </div>

            <label className='bottom'>Graduating Year</label>
            <MDBInput placeholder='Enter Year' name="graduatingYear" onChange={handleChange} className="mb-3 blurred-input" required />

            <div className="mb-3">
              <label style={{ marginRight: "10px" }}>Food Preference : </label>
              <MDBRadio name="foodPreference" value="Veg" label="Veg" onChange={handleChange} inline required />
              <MDBRadio name="foodPreference" value="Non Veg" label="Non Veg" onChange={handleChange} inline required />
            </div>

            <MDBBtn type="submit" block>Submit</MDBBtn>
          </form>
        </div>

      </div>
      <Modal show={showPopup} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Success!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Your form has been submitted successfully.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
