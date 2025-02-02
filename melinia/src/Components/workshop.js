import React, { useState } from "react";
import meliniaEvent from "../Assets/addon/melinia.jpg";
import workshopImage from "../Assets/addon/workshop.jpeg";
import paperPresentation from "../Assets/events/Paper presentation.png";
import hackathon from "../Assets/events/hackATHON.png"
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import { FaArrowRight } from "react-icons/fa";
import mixpanel from "mixpanel-browser";
import SpotlightCard from "./SpotlightCard/SpotlightCard";
function Workshop() {
  const [isEventCompleted, setCondition] = useState(false);

  const handleRegisterClick = () => {
    // Navigate to the specified URL
    mixpanel.track("hackathon button clicked", {
      page:"home"
    });
    window.open('https://unstop.com/o/WJEbn31?lb=D5CxNBMi', '_blank');
  };
  const handleRegisterClick1 = () => {
    // Navigate to the specified URL
    mixpanel.track("paperpresentation button clicked", {
      page:"home"
    });
    window.open('https://unstop.com/p/paper-presentation-coimbatore-institute-of-technology-cit-coimbatore-886885', '_blank');
  };
  return (
    <div className="workshopMainBox">
      <div className="aboutBox" style={{ marginBottom: "30px", textAlign: "center", display: "grid", justifyContent: "center" }}>
  
  {/* Centered Title */}
  <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", marginBottom: "20px" }}>

  <span className="workshopFont font-weight-bold" style={{ fontSize: "24px" }}>
    FLAGSHIP EVENTS
  </span>
</div>


  <div className="events-grid">
    

  <SpotlightCard 
  className="custom-spotlight-card" 
  spotlightColor="rgba(0, 229, 255, 0.2)" 
  style={{ 
    width: "350px", 
    height: "280px", 
    background: "linear-gradient(135deg, #001f3f, #005f73)", 
    color: "white", 
    padding: "20px", 
    borderRadius: "10px", 
    display: "flex", 
    flexDirection: "column", 
    justifyContent: "space-between", 
    alignItems: "center", 
    textAlign: "center", 
    transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)"
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "scale(1.05)";
    e.currentTarget.style.boxShadow = "0px 6px 15px rgba(0, 0, 0, 0.3)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "scale(1)";
    e.currentTarget.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.2)";
  }}
>
  {/* Hackathon Image */}
  <img 
    src="https://cdn-icons-png.flaticon.com/512/7326/7326897.png" 
    alt="Hackathon Logo" 
    style={{ width: "60px", height: "60px", marginBottom: "10px" }}
  />

  {/* Event Title */}
  <h3 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "10px" }}>
    Ideaathon 2025
  </h3>

  {/* Short Description */}
  <p style={{ fontSize: "14px", opacity: "0.9", marginBottom: "15px" }}>
    Join the most exciting AI Hackathon of the year! Collaborate, innovate, and
    create groundbreaking AI solutions.
  </p>

  {/* Event Date & Location */}
  <p style={{ fontSize: "12px", fontWeight: "500", opacity: "0.8", marginBottom: "10px", paddingBottom:"8px" }}>
    📍 CIT, India | 🗓️ March 15-17, 2025
  </p>

  {/* View More Button */}
  <button 
    style={{
      background: "#00a6fb",
      color: "white",
      padding: "8px 15px",
      border: "none",
      borderRadius: "5px",
      fontSize: "14px",
      fontWeight: "bold",
      cursor: "pointer",
      transition: "background 0.3s ease-in-out"
    }}
    onMouseEnter={(e) => e.currentTarget.style.background = "#007bb5"}
    onMouseLeave={(e) => e.currentTarget.style.background = "#00a6fb"}
  >
    View More Info
  </button>

</SpotlightCard>

<SpotlightCard 
  className="custom-spotlight-card" 
  spotlightColor="rgba(0, 229, 255, 0.2)" 
  style={{ 
    width: "350px", 
    height: "280px", 
    background: "linear-gradient(135deg, #001f3f, #005f73)", 
    color: "white", 
    padding: "20px", 
    borderRadius: "10px", 
    display: "flex", 
    flexDirection: "column", 
    justifyContent: "space-between", 
    alignItems: "center", 
    textAlign: "center", 
    transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)"
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "scale(1.05)";
    e.currentTarget.style.boxShadow = "0px 6px 15px rgba(0, 0, 0, 0.3)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "scale(1)";
    e.currentTarget.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.2)";
  }}
>
  {/* Hackathon Image */}
  <img 
    src="https://cdn-icons-png.flaticon.com/512/7326/7326897.png" 
    alt="Hackathon Logo" 
    style={{ width: "60px", height: "60px", marginBottom: "10px" }}
  />

  {/* Event Title */}
  <h3 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "10px" }}>
    AI Hackathon 2025
  </h3>

  {/* Short Description */}
  <p style={{ fontSize: "14px", opacity: "0.9", marginBottom: "15px" }}>
    Join the most exciting AI Hackathon of the year! Collaborate, innovate, and
    create groundbreaking AI solutions.
  </p>

  {/* Event Date & Location */}
  <p style={{ fontSize: "12px", fontWeight: "500", opacity: "0.8", marginBottom: "10px", paddingBottom:"8px" }}>
    📍 Bengaluru, India | 🗓️ March 15-17, 2025
  </p>

  {/* View More Button */}
  <button 
    style={{
      background: "#00a6fb",
      color: "white",
      padding: "8px 15px",
      border: "none",
      borderRadius: "5px",
      fontSize: "14px",
      fontWeight: "bold",
      cursor: "pointer",
      transition: "background 0.3s ease-in-out"
    }}
    onMouseEnter={(e) => e.currentTarget.style.background = "#007bb5"}
    onMouseLeave={(e) => e.currentTarget.style.background = "#00a6fb"}
  >
    View More Info
  </button>

</SpotlightCard>



  </div>

</div>

      {/* <Divider style={{ padding: '0', margin: '0', borderColor: 'black' }} /> */}


    
{/* 
      <Divider style={{ padding: '0', margin: '0', borderColor: 'black' }} />

      {/* Third Box*/}
      {/* <div className="workshopBox">
        <div>
          <img className="workshopImage" src={workshopImage} alt="Event" />
        </div>
        <div className="verticalDivider" style={{ height: '300px', width: '10px', backgroundColor: '#676368', marginLeft: '20px', marginRight: '15px' }}></div>
        <div style={{ paddingLeft: '30px', paddingRight: '20px', marginTop: '20px' }}>
          <div className="d-flex justify-content-between flex-column flex-md-row">
            <div>
              <span className="workshopSubFont font-weight-bold">Workshop</span>
            </div>
            <div>
              <span className="workshopSubFont font-weight-bold" style={{ color: 'gray', fontSize: '0.9em' }}>5TH APRIL 10.00 - 11.30 AM</span>
            </div>
          </div>
          <div style={{ marginTop: '5px' }}>
            <span className="workshopFont">THE ENTREPRENEURIAL MINDSET</span>
          </div>
          <Divider className="horizontalDivider" style={{ padding: '0', margin: '0', marginTop: '10px', borderColor: 'black' }} />
          <p className="rajdhaniFont" style={{ textAlign: 'initial', marginTop: '20px' }}>Are you an aspiring entrepreneur looking to learn from a successful founder? Join Prashanth Ganesh, founder of PreSkale, and our alumni, for "Revive the Entrepreneur in You", a one-day workshop that will provide you with the tools and resources to launch and grow your own business. Don't miss out on this exciting opportunity to revive the entrepreneur in you!</p>
          <div style={{ display: 'flex', justifyContent: 'end' }}>

            {!isEventCompleted ? (
              <Button className="buttonFont" style={{ backgroundColor: '#61016e' }} variant="contained">Register <FaArrowRight style={{ marginLeft: '3px' }} /></Button>

            ) : (<Button className="buttonFont" style={{ color: '#61016e', borderColor: '#61016e' }} variant="outlined">Event Completed <FaArrowRight style={{ marginLeft: '3px' }} /></Button>)}
          </div>
        </div>


      </div> */} 


    </div>





  );
}

export default Workshop;
