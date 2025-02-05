import React from "react";
import { Avatar } from "@mui/material";
import { Box, Container } from "@mui/system";
import chief from "../Assets/crew/chief.jpg";

function ChiefGuest() {
  return (
    <Box
      sx={{
        marginTop: "60px",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
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
          padding: "40px",
          boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.3)",
          textAlign: "center",
          maxWidth: "600px",
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
            width: 200,
            height: 200,
            border: "4px solid white",
            boxShadow: "0px 5px 15px rgba(255, 255, 255, 0.2)",
            transition: "transform 0.3s ease-in-out",
            '&:hover': {
              transform: "scale(1.1)",
            },
          }}
        />

        <h3 style={{ color: "#f1f1f1", marginTop: "15px", fontSize: "1.6rem", fontWeight: "bold" }}>
          Mr. Sathish Nandagopal
        </h3>
        <p style={{ color: "#d3d3d3", fontSize: "1rem", fontWeight: "500", margin: "4px 0" }}>
          Location Head HR, Wipro Technologies
        </p>
        <p style={{ color: "#d3d3d3", fontSize: "1rem", fontWeight: "500", margin: "4px 0" }}>
          FSC - CIS Coimbatore
        </p>

        <p
          className="coco-gothic-text"
          style={{
            color: "#d3d3d3",
            fontSize: "1.2rem",
            fontWeight: "500",
            marginTop: "15px",
            lineHeight: "1.6",
          }}
        >
          Excitement fills the air as we announce Sathish Nandagopal as the Chief Guest for our techfest. As a leader overseeing <span className="numbers">3200+</span> employees, he is committed to fostering inclusivity and excellence in the workplace. Join us for an insightful session with a visionary leader!
        </p>
      </Container>
    </Box>
  );
}

export default ChiefGuest;
