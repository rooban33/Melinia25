import React from "react";
import meliniaEvent from "../Assets/addon/meliniaposter.jpg"
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import { FaArrowRight } from "react-icons/fa";


function AboutMelinia() {

  return (
 <div className="aboutBox">

   <div>
   <img className="eventImage" src={meliniaEvent} alt="Event"/>
   </div>

   <Divider className="horizontalDivider" style={{ padding: '0', margin: '0', marginTop: '10px', borderColor: 'black' }} />


   <div style={{paddingLeft:'30px', paddingRight:'20px', marginTop: '20px'}}>
   <span className="aboutFont">ABOUT MELINIA</span> 
   <p className="rajdhaniFont" style={{textAlign:'justify', marginTop:'20px'}}>The Department of Computing organizes a National level inter-college technical symposium "Melinia". It is a celebration of technology, creativity and innovation, attracting students from around the state. It provides a national platform for the students to showcase their talents and motivates through workshops conducted by industrial experts. It also provides an opportunity for the companies to network and engage with the next generation of technology leaders.</p>
   <Divider className="horizontalDivider" style={{ padding: '0', margin: '0', marginTop: '10px', borderColor: 'black' }} />
   {/* <Button className="buttonFont" style={{ backgroundColor: '#61016e' }} variant="contained" >About <FaArrowRight style={{ marginLeft: '3px' }} /></Button>   */}
    </div>
 </div>
  );
}

export default AboutMelinia;
