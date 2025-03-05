import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { FaHandshake } from "react-icons/fa";
import profitstoryLogo from "../Assets/logo/sponsor.png"; // Ensure the correct logo path

function Sponsors() {
  return (
    <Box
      sx={{
        marginTop: "80px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        padding: "40px",
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          background: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(10px)",
          borderRadius: "20px",
          padding: "50px",
          boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.3)",
          maxWidth: "500px",
        }}
      >
        {/* Title */}
        <Typography
          variant="h4"
          fontWeight="bold"
          color="#d96caf"
          sx={{
            textTransform: "uppercase",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <FaHandshake size={30} color="#d96caf" />
          Event Sponsor
        </Typography>

        {/* Sponsor Logo */}
        <Box
          sx={{
            marginTop: "30px",
            width: "100%",
            maxWidth: "300px",
            borderRadius: "15px",
            overflow: "hidden",
            boxShadow: "0px 5px 20px rgba(0, 0, 0, 0.2)",
            transition: "transform 0.3s ease-in-out",
            "&:hover": {
              transform: "scale(1.05)",
            },
          }}
        >
          <img
            src={profitstoryLogo}
            alt="ProfitStory.ai"
            width="100%"
            style={{ objectFit: "contain", borderRadius: "15px" }}
          />
        </Box>

        {/* Sponsor Name */}
        {/* <Typography
          variant="h5"
          fontWeight="bold"
          color="#fff"
          sx={{ marginTop: "20px" }}
        >
          ProfitStory.ai
        </Typography> */}

        {/* Sponsor Description */}
        <Typography
          variant="body1"
          color="#d3d3d3"
          sx={{ marginTop: "10px", fontSize: "1rem", textAlign: "center" }}
        >
          ProfitStory.ai is a leading AI-powered financial analytics platform that
          helps businesses track and optimize their profitability with real-time insights.
        </Typography>
      </Container>
    </Box>
  );
}

export default Sponsors;
