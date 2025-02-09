import React from "react";
import { Avatar } from "@mui/material";
import { Box, Container } from "@mui/system";
import chief from "../Assets/crew/chief.jpeg";

function ChiefGuest() {
  return (
    <Box
      sx={{
        marginTop: "60px",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: { xs: "10px", sm: "20px", md: "40px" }, // More padding on large screens
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(10px)",
          borderRadius: "20px",
          padding: { xs: "15px", sm: "30px", md: "40px" }, // Consistent padding
          boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.3)",
          textAlign: "center",
          width: "100%", // Ensure full width on larger screens
          maxWidth: { xs: "90%", sm: "80%", md: "70%" }, // Full width on laptops
        }}
      >
        <h2
          style={{
            color: "#d96caf",
            fontSize: "2rem",
            fontWeight: "bold",
            textTransform: "uppercase",
            marginBottom: "15px",
          }}
          className="ds-digib-text"
        >
          Meet Our Chief Guest
        </h2>

        <Avatar
          src={chief}
          sx={{
            width: { xs: 140, sm: 180, md: 200 },
            height: { xs: 140, sm: 180, md: 200 },
            border: "4px solid white",
            boxShadow: "0px 5px 15px rgba(255, 255, 255, 0.2)",
            transition: "transform 0.3s ease-in-out",
            "&:hover": {
              transform: "scale(1.1)",
            },
          }}
        />

        <h3
          style={{
            color: "#f1f1f1",
            marginTop: "10px",
            fontSize: "1.5rem",
            fontWeight: "bold",
          }}
        >
          Mr. Ashok Kumar
        </h3>
        <p
          style={{
            color: "#d3d3d3",
            fontSize: "1rem",
            fontWeight: "500",
            margin: "4px 0",
          }}
        >
          Senior Director, Quinbay Technologies
        </p>

        <Box
          sx={{
            color: "#d3d3d3",
            fontSize: { xs: "1rem", sm: "1.2rem" },
            fontWeight: "500",
            marginTop: { xs: "8px", sm: "15px" },
            lineHeight: { xs: "1.4", sm: "1.6" },
            textAlign: { xs: "center", sm: "justify" },
            maxWidth: { xs: "100%", sm: "90%", md: "800px" }, // Full width for laptops
          }}
        >
          We are delighted to introduce Ashok Kumar Subramanian, a seasoned technology leader with over 
          <span className="numbers"> 15 </span> years of experience. Currently a Senior Director at Quinbay Technologies, 
          he began his journey as a Mobile Application developer and later expanded into Java, frontend technologies, and full-stack development.
          <br />
          <br />
          Leading a team of <span className="numbers"> 100 </span>+ professionals, he plays a key role in managing a high-scale e-commerce platform 
          serving millions of users. One of his major achievements is implementing ML-driven solutions that handle sudden traffic surges, scaling 
          user volumes from thousands to millions in seconds.
          <br />
          <br />
          With a strong Machine Learning foundation from IIT-Madras, Ashok Kumar continues to drive innovation and scalability in 
          the e-commerce space.
        </Box>
      </Container>
    </Box>
  );
}

export default ChiefGuest;
