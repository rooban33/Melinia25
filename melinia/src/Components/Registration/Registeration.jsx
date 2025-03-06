import React, { useState, useEffect, useRef } from 'react';
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
import Preloader from '../Pre'
import collegeData from "../../Assets/college_names/colleges.json"
import stateData from "../../Assets/college_names/states.json";
import districtData from "../../Assets/college_names/district.json"
import { useScroll } from 'framer-motion';


export default function Gforms() {

  const [show, setShow] = useState(true); // Show modal on render
  const [load, setLoad] = useState(false);
  const [states, setStates] = useState(stateData);

  const idRef = useRef(null);
  const navigate = useNavigate();

  const [colleges, setColleges] = useState(collegeData);
  const [selectedState, setSelectedState] = useState(""); // Stores the selected state

  const [districts, setDistricts] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState(""); // Stores districts based on state selection
  // const [selectedCollege,setSelectedCollege] = useState("")
  const [selectedCollege, setSelectedCollege] = useState("");
  const [isDistrictOpen, setIsDistrictOpen] = useState(false);
  const [isCollegeOpen, setIsCollegeOpen] = useState(false);
  const [isStateOpen, setIsStateOpen] = useState(false);

  const [stateSearch, setStateSearch] = useState("");
  const [districtSearch, setDistrictSearch] = useState("");
  const [collegeSearch, setCollegeSearch] = useState("");
  const dropdownRef = useRef(null);

  // Query form state
  const [queryMessage, setQueryMessage] = useState("");
  const [queryEmail, setQueryEmail] = useState("");
  const [queryName, setQueryName] = useState("");
  const [querySuccess, setQuerySuccess] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsCollegeOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);



  // Handle state selection change
  const handleStateChange = (event) => {
    const selectedStateName = event.target.value;
    setSelectedState(selectedStateName);
    setSelectedDistrict(""); // Reset district selection
    setColleges([]); // Reset college selection

    // Find districts for the selected state
    const stateInfo = districtData.states.find((state) => state.state === selectedStateName);
    setDistricts(stateInfo ? stateInfo.districts : []);
  };

  // Handle district selection change
  const handleDistrictChange = (event) => {
    const selectedDistrictName = event.target.value;
    setSelectedDistrict(selectedDistrictName);

    // Filter colleges based on the selected district
    const filteredColleges = collegeData
      .filter((college) => college.district === selectedDistrictName)
      .map((college) => college.college); // Extract only the college names

    setColleges(filteredColleges);
  };

  /*useEffect(() => {
    fetch("/Assets/college names/colleges.json") // Adjust the path if needed
      .then((response) => response.json())
      .then((data) => {
        setColleges(data); // Store the JSON data in state
      })
      .catch((error) => console.error("Error loading JSON:", error));
      console.log("Hello",colleges)
  }, []);*/

  const handleClose = () => {
    setShow(false);
    navigate("/"); // Redirect to home
  };

  const handleCloseUndefined = () => {
    setShowUndefined(false);
  };

  const handleQueryClose = () => {
    setQuerySuccess(false);
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
  const [showUndefined, setShowUndefined] = useState(true);
  const [showClose, setShowClose] = useState(false);

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
        idRef.current = options.order_id;
        console.log("Shajith", orderData.id);

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

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    if (validate())
      setLoad(true);
    else {
      let errorMessages = Object.entries(errors)
        .filter(([key, value]) => value) // Keep only non-empty errors
        .map(([key, value]) => `${key}: ${value}`) // Format them properly
        .join("\n"); // Join into a single string

      if (errorMessages) {
        alert("Invalid Inputs:\n" + errorMessages);
      }
      return;
    }
    const paymentSuccess = await handleRegisterClick();
    if (paymentSuccess) {
      if(idRef.current=='undefined')
      {
        setShowUndefined(true);
      }

        // Construct form data
        console.log("Shajith", idRef.current, formData.institute);
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
        formDataObj.append("entry.1221076541", idRef.current);

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

  // Handle query form submission
  const handleQuerySubmit = (e) => {
    e.preventDefault();

    // Validate query form
    if (!queryName || !queryEmail || !queryMessage) {
      alert("Please fill all fields in the query form");
      return;
    }

    // Format the message
    const messageText = `Name: ${queryName}%0AEmail: ${queryEmail}%0AMessage: ${queryMessage}`;

    // Send message via WhatsApp (open in new tab)
    window.open(`https://wa.me/919489425649?text=${messageText}`, '_blank');

    // Show success message
    setQuerySuccess(true);

    // Reset form
    setQueryName("");
    setQueryEmail("");
    setQueryMessage("");
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
  const [errors, setErrors] = useState({
    email: '',
    mobile: '',
    graduatingYear: ''
  });

  const validate = () => {
    let tempErrors = { email: '', mobile: '', graduatingYear: '' };

    // Email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      tempErrors.email = "Invalid email format";
    }

    // Mobile number validation (10 digits)
    if (!/^\d{10}$/.test(formData.mobile)) {
      tempErrors.mobile = "Mobile number must be 10 digits";
    }

    // Graduating year validation (1900 - 2030)
    const gradYear = parseInt(formData.graduatingYear);
    if (isNaN(gradYear) || gradYear < 1900 || gradYear > 2030) {
      tempErrors.graduatingYear = "Year must be between 1900 and 2030";
    }

    setErrors(tempErrors);
    return Object.values(tempErrors).every(error => error === '');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let tempErrors = { ...errors };

    // Live validation for each field
    switch (name) {
      case "email":
        tempErrors.email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
          ? ""
          : "Invalid email format";
        break;

      case "mobile":
        tempErrors.mobile = /^\d{10}$/.test(value)
          ? ""
          : "Mobile number must be 10 digits";
        break;

      case "graduatingYear":
        const gradYear = parseInt(value, 10);
        tempErrors.graduatingYear =
          !isNaN(gradYear) && gradYear >= 1900 && gradYear <= 2030
            ? ""
            : "Year must be between 1900 and 2030";
        break;

      default:
        break;
    }
    setFormData({ ...formData, [name]: value });
    setErrors(tempErrors);
  };
  return (

    <>
      <Preloader load={load} />
      <Particle />
      <div className="hero-container6">
        <div className="squid-bg6"></div>
        <div className="hero-card6">
          <h2 className="form-title">Registration</h2>
          {/* Info Section */}
          <div className="query-section mt-5 pt-4 border-top border-light">
            {/* <h3 className="form-title">Registration Details</h3> */}
            <div className="contact-info mb-4">
              <p className="mb-2">✅ Fee: ₹250 (Includes access to all tech and non-tech events + lunch )</p>
              <p className="mb-2">✅ Flagship Events: Requires additional fee excluding the overall registration fee </p>
              <p className="mb-2">✅ Arrival Time: All participants must report by 8:10 AM at the college.</p>
              <p className="mb-2">✅ Requirements: Bring your laptop for participation.</p>
              <p className="mb-2">✅ Registration Kit: All participants will receive a registration kit upon arrival.</p>
            </div>
          </div>
          <form className="text-white form-grid mt-5 pt-4 border-top border-light" onSubmit={handleSubmit}>
            <div>
              <label className='bottom'>Email</label>
              <MDBInput placeholder='Enter Email' name="email" onChange={handleChange} className="mb-3 blurred-input" required />
              {errors.email && <span className="error-text">{errors.email}</span>}
            </div>
            <div>
              <label className='bottom'>Mobile Number</label>
              <MDBInput placeholder='Enter Mobile Number' name="mobile" onChange={handleChange} className="mb-3 blurred-input" required />
              {errors.mobile && <span className="error-text">{errors.mobile}</span>}
            </div>
            <div>
              <label>First Name</label>
              <MDBInput placeholder='Enter First Name' name="firstName" onChange={handleChange} className="form-control" required />
            </div>
            <div>
              <label>Last Name</label>
              <MDBInput placeholder='Enter Last Name' name="lastName" onChange={handleChange} className="form-control" required />
            </div>

            <div className='input-container'>
              <label>Gender</label>
              <div>
                <MDBRadio name="gender" value="Male" label="Male" onChange={handleChange} inline required />
                <MDBRadio name="gender" value="Female" label="Female" onChange={handleChange} inline required />
              </div>
            </div>
            {/* State Dropdown with Search */}
            <div className="dropdown mt-3">
              <label>State</label>
              <button
                className="btn dropdown-toggle w-100 text-left form-control"
                type="button"
                onClick={() => setIsStateOpen(!isStateOpen)}
              >
                {selectedState || "Select a state"}
              </button>

              {isStateOpen && (
                <div
                  className="dropdown-menu w-100 show"
                  style={{ maxHeight: "200px", overflowY: "auto", backgroundColor: "black" }}
                >
                  <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="Search state..."
                    value={stateSearch}
                    onChange={(e) => setStateSearch(e.target.value)}
                    style={{ backgroundColor: "black", color: "white", border: "1px solid white" }}
                  />
                  {Object.entries(states)
                    .filter(([code, name]) => name?.toLowerCase().includes(stateSearch?.toLowerCase()))
                    .map(([code, name]) => (
                      <a
                        key={code}
                        className="dropdown-item"
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          handleStateChange({ target: { value: name } });
                          setIsStateOpen(false);
                        }}
                        style={{ color: "white", backgroundColor: "black" }}
                      >
                        {name}
                      </a>
                    ))}
                </div>
              )}
            </div>



            {/* District Dropdown with Search */}
            <div className="dropdown mt-3">
              <label>District</label>
              <button
                className="btn dropdown-toggle w-100 text-left form-control"
                type="button"
                onClick={() => setIsDistrictOpen(!isDistrictOpen)}
              >
                {selectedDistrict || "Select a district"}
              </button>

              {isDistrictOpen && (
                <div
                  className="dropdown-menu w-100 show"
                  style={{ maxHeight: "200px", overflowY: "auto", backgroundColor: "black" }}
                >
                  <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="Search district..."
                    value={districtSearch}
                    onChange={(e) => setDistrictSearch(e.target.value)}
                    style={{ backgroundColor: "black", color: "white", border: "1px solid white" }}
                  />
                  {districts
                    .filter((district) => district?.toLowerCase().includes(districtSearch?.toLowerCase()))
                    .map((district, index) => (
                      <a
                        key={index}
                        className="dropdown-item"
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          handleDistrictChange({ target: { value: district } });
                          setIsDistrictOpen(false);
                        }}
                        style={{ color: "white", backgroundColor: "black" }}
                      >
                        {district}
                      </a>
                    ))}
                </div>
              )}
            </div>


            {/* College Dropdown with Search */}
            <div className="dropdown mt-3" ref={dropdownRef}>
              <label>College</label>
              <button
                className="btn dropdown-toggle w-100 text-left form-control"
                type="button"
                onClick={() => setIsCollegeOpen(!isCollegeOpen)}
              >
                {selectedCollege || "Select a college"}
              </button>

              {isCollegeOpen && (
                <div
                  className="dropdown-menu w-100 show"
                  style={{ maxHeight: "200px", overflowY: "auto", backgroundColor: "black" }}
                >
                  {/* Search Box */}
                  <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="Search college..."
                    value={collegeSearch}
                    onChange={(e) => setCollegeSearch(e.target.value)}
                    style={{ backgroundColor: "black", color: "white", border: "1px solid white" }}
                  />

                  {/* Filtered College List */}
                  {(colleges || [])
                    .filter((college) => typeof college === "string" && college.toLowerCase().includes(collegeSearch.toLowerCase()))
                    .map((college, index) => (
                      <a
                        key={index}
                        className="dropdown-item"
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          setSelectedCollege(college);
                          setIsCollegeOpen(false);
                          setCollegeSearch(""); // Clear search after selection
                          setFormData((prevData) => ({ ...prevData, institute: college })); // Update formData
                        }}
                        style={{ color: "white", backgroundColor: "black" }}
                      >
                        {college}
                      </a>
                    ))}

                  {/* Handle no matching results */}
                  {(colleges || []).filter((college) => typeof college === "string" && college.toLowerCase().includes(collegeSearch.toLowerCase()))
                    .length === 0 && (
                      <p className="text-center text-white">No colleges found</p>
                    )}
                </div>
              )}
            </div>

            {/* )} */}
            <div>
              <label>Course</label>
              {/*<MDBInput placeholder='Enter Course Name' name="course" onChange={handleChange} className="form-control" required />*/}
              <select name="course" onChange={handleChange} className="form-control" required>
                <option value="">Select Course</option>
                <option value="be">B.E</option>
                <option value="btech">B.Tech</option>
                <option value="msc">M.Sc</option>
                <option value="bsc">B.Sc</option>
                <option value="me">M.E</option>
                <option value="mtech">M.Tech</option>
                <option value="bba">BBA</option>
                <option value="mba">MBA</option>
                <option value="mca">MCA</option>
                <option value="bcom">B.Com</option>
                <option value="ma">M.A</option>
                <option value="phd">Ph.D</option>
                <option value="diploma">Diploma</option>
              </select>
            </div>

            <div>
              <label>Department</label>
              <MDBInput placeholder='Enter Department' name="specialization" onChange={handleChange} className="form-control" required />
            </div>

            <div>
              <label>Year of Study</label>
              <select name="yearOfStudy" onChange={handleChange} className="form-control" required>
                <option value="">Select Year</option>
                <option value="I">I</option>
                <option value="II">II</option>
                <option value="III">III</option>
                <option value="IV">IV</option>
                <option value="V">V</option>
              </select>
            </div>

            <div>
              <label className='bottom'>Graduating Year</label>
              <MDBInput placeholder='Enter Year' name="graduatingYear" onChange={handleChange} className="mb-3 blurred-input" required />
              {errors.graduatingYear && <span className="error-text">{errors.graduatingYear}</span>}
            </div>

            <div className="full-width">
              <label>Food Preference</label>
              <div>
                <MDBRadio name="foodPreference" value="Veg" label="Veg" onChange={handleChange} inline required />
                <MDBRadio name="foodPreference" value="Non Veg" label="Non Veg" onChange={handleChange} inline required />
              </div>
            </div>

            <div className="full-width">
              <button type="submit" className='custom-submit-button' disabled='true' block>Submit</button>
            </div>
          </form>


          {/* Query Section */}
          <div className="query-section mt-5 pt-4 border-top border-light">
            <h3 className="form-title">For Queries</h3>
            <div className="contact-info mb-4">
              <p className="mb-2"><strong>Contact Us:</strong></p>
              <p className="mb-2">Shajithrooban - <a href="tel:+919489425649" className="text-white">+91 9489425649</a></p>
              <p>Mughilan - <a href="tel:+917397169278" className="text-white">+91 7397169278</a></p>
            </div>
          </div>
        </div>
      </div>

      {/* Registration Success Modal */}
      <Modal show={showPopup} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Success!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          🎉 Welcome to MELINIA 2K25 🎉
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showUndefined} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>📢 Online Registration Closed! 🚫</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        Online registration is now closed, but don't worry! You can still register on-spot at the venue. ✅🎟️
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showClose} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>⚠️ Oops! Something went wrong!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        Sorry for the inconvenience. Please register again. If any amount was debited, it will be refunded on the same day. ✅💰
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleCloseUndefined}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>


      {/* Query Success Modal */}
      {/* <Modal show={querySuccess} onHide={handleQueryClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Message Sent!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Your message has been sent successfully. We'll get back to you soon!
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleQueryClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal> */}
    </>
  );
}