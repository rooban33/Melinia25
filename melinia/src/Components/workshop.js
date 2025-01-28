import React, { useState } from "react";
import meliniaEvent from "../Assets/addon/melinia.jpg";
import workshopImage from "../Assets/addon/workshop.jpeg";
import paperPresentation from "../Assets/events/Paper presentation.png";
import hackathon from "../Assets/events/hackATHON.png"
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import { FaArrowRight } from "react-icons/fa";
import mixpanel from "mixpanel-browser";
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
      <div className="aboutBox" style={{marginBottom:"30px"}}>
        <div>
          <img className="workshopImage" src={hackathon} alt="Event" />
        </div>
        <div className="verticalDivider" style={{ height: '300px', width: '10px', backgroundColor: '#676368', marginLeft: '20px', marginRight: '15px' }}></div>
        <div style={{ paddingLeft: '30px', paddingRight: '20px', marginTop: '20px' }}>
          <div className="d-flex justify-content-between flex-column flex-xl-column">
            <div style={{marginBottom:'10px'}}>
              <span className="workshopFont font-weight-bold">HACKATHON</span>
            </div>
            <br></br>
            <div>
              <span className="workshopSubFont font-weight-bold" style={{ color: 'white', fontSize: '0.9em' }}>Round 1 : Feb 1-10 2024 <br></br> Round 2 : Feb 12-14 2024</span>
            </div>
            {/* <br/>
            <div>
              <span className="workshopSubFont font-weight-bold" style={{ color: 'white', fontSize: '0.9em' }}>Round 2: Feb 12-14 2024</span>
            </div> */}
          </div>
          {/* <div style={{ marginTop: '5px' }}>
            <span className="workshopFont">ABOUT THE MELINIA HACKATHON</span>
          </div> */}
          <Divider className="horizontalDivider" style={{ padding: '0', margin: '0', marginTop: '10px', borderColor: 'black' }} />
          <p className="rajdhaniFont" style={{ textAlign: 'initial', marginTop: '20px' }}>Embark on a transformative journey at the forefront of innovation with Melinia's Flagship Hackathon! This dynamic event is your gateway to shaping a brighter future through four compelling themes:
<br></br>
<br></br>
1) Sustainable tech<br></br>
	2) Mental health tech<br></br> 
	3) Civic Engagement<br></br>
	4) Financial literacy<br></br>
  <br></br>



Join us in crafting viable and feasible product prototypes that not only enhance the lifestyles of students and professors but also elevate the working standards of institutions at large. Let your creativity thrive and leave a lasting mark on the world! 💡</p>
          <div style={{ display: 'flex', justifyContent: 'end' }}>
            {!isEventCompleted ? (
              <Button className="buttonFont" style={{ backgroundColor: '#61016e' }} variant="contained" onClick={handleRegisterClick}>Register <FaArrowRight style={{ marginLeft: '3px' }} /></Button>

            ) : (<Button className="buttonFont" style={{ color: '#61016e', borderColor: '#61016e' }} variant="outlined">Event Completed <FaArrowRight style={{ marginLeft: '3px' }} /></Button>)}


          </div>
        </div>


      </div>
      {/* <Divider style={{ padding: '0', margin: '0', borderColor: 'black' }} /> */}


    
       <div className="aboutBox2">
        <div className="reverseFlex">
          <div>
            <img className="workshopImage" src={paperPresentation} alt="Event" />
          </div>
          <div className="verticalDivider" style={{ height: '300px', width: '10px', backgroundColor: '#676368', marginLeft: '20px', marginRight: '25px' }}></div>
          <div style={{ paddingLeft: '30px', paddingRight: '20px', marginTop: '20px' }}>
            <div className="d-flex justify-content-between flex-column flex-md-row" >
              <div>
                <span className="workshopFont font-weight-bold">PAPER PRESENTATION</span>
              </div>
              <div>
                <span className="workshopSubFont font-weight-bold" style={{ color: 'white', fontSize: '0.9em' }}>Feb 16 2024</span>
              </div>
            </div>
            {/* <div style={{ marginTop: '5px', display:'flex', justifyContent:'start' }}>
              <span className="workshopFont" style={{textAlign:'center'}}>THE ENTREPRENEURIAL MINDSET</span>
            </div> */}
            <Divider className="horizontalDivider" style={{ padding: '0', margin: '0', marginTop: '10px', borderColor: 'black' }} />
            <p className="rajdhaniFont" style={{ textAlign: 'initial', marginTop: '20px' }}>Embark on a journey of intellectual exploration at Melinia's Paper Presentation Event! Select from five captivating themes:

            <br></br>
<br></br>
1) JavaScript Frameworks: A Journey from Past to Present and Future Innovations<br></br>
	2) Preparing for Uncertainty: Decision Making in a Dynamic Business Environment<br></br> 
	3) From Code to Canvas: Generative AI's Artistic Endeavors<br></br>
	4) Anticipating the Future: Unraveling Predictive Modeling Across Various Industries<br></br>
  5) Tech Evolution in Communication: Tracing the Impact on Past, Present, and Future<br></br>
  <br></br>

Seize this opportunity to present insightful perspectives and contribute to the rich tapestry of intellectual innovation. Unfold your ideas on the stage of knowledge! 📚 </p>
            <div style={{ display: 'flex', justifyContent: 'end' }}>
              {!isEventCompleted ? (
                <Button className="buttonFont" style={{ backgroundColor: '#61016e' }} variant="contained" onClick={handleRegisterClick1}>Register <FaArrowRight style={{ marginLeft: '3px' }} /></Button>

              ) : (<Button className="buttonFont" style={{ color: '#61016e', borderColor: '#61016e' }} variant="outlined">Event Completed <FaArrowRight style={{ marginLeft: '3px' }} /></Button>)}
            </div>
          </div>
        </div>


      </div>
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
