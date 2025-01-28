import { Avatar, span } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import chief from "../Assets/crew/chief.jpg"

function ChiefGuest() {
  return (
    <Box sx={{ marginTop: "60px",height:"100%",width:"100%",padding:"20px"  }}>
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
          <span className="font1" fontWeight="700" style={{color:'white', fontSize:'1.6rem'}} mb={1} textAlign="center">
            MEET OUR CHIEF GUEST
          </span>
        

          <Avatar src={chief} sx={{marginTop:'10px', marginBottom:'10px',width:230,objectFit:"contain",height:230,borderRadius:"100%",}} />

          <span className="font2" color="white"  variant="h6" style={{marginTop:8, color:'#d3d3d3', fontWeight:'bolder', fontSize:'1.5em', marginBottom:4}}>Mr. Sathish Nandagopal</span>
          <span className="font3" variant="subtitle2" style={{color:'#d3d3d3', fontWeight:'bolder', marginBottom:4}}>Location Head HR</span>
          <span className="font3" variant="subtitle2" style={{color:'#d3d3d3', fontWeight:'bolder', marginBottom:4}}>FSC - CIS Coimbatore</span>
          <span className="font3" variant="subtitle2" style={{color:'#d3d3d3', fontWeight:'bolder', marginBottom:4}}>Wipro Technologies</span>
          <span className="font3" color="#d3d3d3" textAlign="center" style={{color:'#d3d3d3', fontWeight:'bolder', fontSize:'1.3rem', marginBottom:4}}>Excitement fills the air as we announce Sathish Nandagopal, Location HR at Wipro, as the Chief Guest for our techfest. With a passion for leading global people agendas, Sathish oversees the human capital needs of 3200+ employees in the location, ensuring the right talent for impactful business outcomes. Committed to fostering inclusivity, he envisions a workplace where everyone can contribute and succeed equally. Join us for an insightful session with Sathish Nandagopal, a leader dedicated to excellence and positive change</span>
        </Box>
      </Container>
    </Box>
  );
}

export default ChiefGuest;
