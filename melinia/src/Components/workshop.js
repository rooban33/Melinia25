import React, { useState, useEffect } from "react";
import meliniaEvent from "../Assets/addon/melinia.jpg";
import workshopImage from "../Assets/addon/workshop.jpeg";
import paperPresentation from "../Assets/events/Paper presentation.png";
import hackathon from "../Assets/events/hackATHON.png";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import { FaArrowRight } from "react-icons/fa";
import mixpanel from "mixpanel-browser";
import SpotlightCard from "./SpotlightCard/SpotlightCard";
import hackathonicon from '../Assets/icons/hackathon.png';
import pitch from '../Assets/icons/pitch.png'

function Workshop() {
  const [ideathonSlots, setIdeathonSlots] = useState(0);
  const [hackathonSlots, setHackathonSlots] = useState(0);
  const [isEventCompleted, setCondition] = useState(false);

  // Fetch available seats for Ideathon
  const fetchIdeathonSlots = async () => {
    try {
      const response = await fetch("https://melinia-backend.onrender.com/available_seats/ideathon");
      const data = await response.json();
      setIdeathonSlots(data.available_seats); // Adjust based on the API response structure
    } catch (error) {
      console.error("Error fetching Ideathon slots:", error);
    }
  };

  // Fetch available seats for Hackathon
  const fetchHackathonSlots = async () => {
    try {
      const response = await fetch("https://melinia-backend.onrender.com/available_seats/hackathon");
      const data = await response.json();
      setHackathonSlots(data.available_seats); // Adjust based on the API response structure
    } catch (error) {
      console.error("Error fetching Hackathon slots:", error);
    }
  };

  // Use effect to fetch slots on component mount
  useEffect(() => {
    fetchIdeathonSlots();
    fetchHackathonSlots();
  }, []);

  const handleRegisterClick = () => {
    mixpanel.track("hackathon button clicked", { page: "home" });
    window.open("https://unstop.com/o/IGpR5Js?lb=PETC6GS6", "_blank");
  };

  const handleRegisterClick1 = () => {
    mixpanel.track("Hackathon button clicked", { page: "home" });
    window.open("https://unstop.com/o/FoaGhvO", "_blank");
  };

  const blinkingStyle = {
    animation: "blinking 1s infinite",
  };

  return (
    <div className="workshopMainBox">
      <div className="aboutBox" style={{ marginBottom: "30px", textAlign: "center", display: "grid", justifyContent: "center" }}>
        {/* Centered Title */}
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", marginBottom: "20px" }}>
          <span className="workshopFont font-weight-bold ds-digib-text" style={{}}>
            FLAGSHIP EVENTS
          </span>
        </div>

        <div className="events-grid">
          {/* Ideathon Spotlight Card */}
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
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
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
            <img
              src={hackathonicon}
              alt="Hackathon Logo"
              style={{ width: "60px", height: "60px", marginBottom: "10px" }}
            />
            <h3 className="greater-theory-text" style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "10px" }}>Hackathon 2025</h3>
            <p className="coco-gothic-text" style={{ fontSize: "14px", opacity: "0.9", marginBottom: "15px" }}>
              Melinia Hackathon is a premier innovation-driven competition designed to foster creativity, problem-solving skills, and collaboration among participants. This flagship event challenges students to develop groundbreaking solutions to real-world problems across diverse domains, pushing the boundaries of technology and innovation.
            </p>
            <p style={{ fontSize: "12px", fontWeight: "500", opacity: "0.8", marginBottom: "10px", paddingBottom: "8px" }}>
              📍 MBCH | 🗓️ March 5-7, 2025
            </p>

            {/* Available Slots */}
            <p style={{ fontSize: "16px", fontWeight: "bold", marginBottom: "10px", ...(ideathonSlots < 10 ? blinkingStyle : {}) }}>
              Slots Available: {hackathonSlots}
            </p>

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
                transition: "background 0.3s ease-in-out",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#007bb5")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#00a6fb")}
              onClick={handleRegisterClick1}
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
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
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
            <img
              src={pitch}
              alt="Pitch Logo"
              style={{ width: "60px", height: "60px", marginBottom: "10px" }}
            />
            <h3 className="greater-theory-text" style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "10px" }}>The Pitch Pit 2025</h3>
            <p className="coco-gothic-text" style={{ fontSize: "14px", opacity: "0.9", marginBottom: "15px" }}>
              The Pitch Pit is an exciting opportunity to present your ideas, receive expert guidance, and gain the support needed to turn your vision into reality. More than just an ideathon, this platform encourages innovation across both technical and non-technical fields. Participants are challenged to develop creative solutions to real-world problems.</p>
            <p style={{ fontSize: "12px", fontWeight: "500", opacity: "0.8", marginBottom: "10px", paddingBottom: "8px" }}>
              📍 IT 212, IT 213 | 🗓️ March 7, 2025
            </p>

            {/* Available Slots */}
            <p style={{ fontSize: "16px", fontWeight: "bold", marginBottom: "10px", ...(hackathonSlots < 10 ? blinkingStyle : {}) }}>
              Slots Available: {ideathonSlots}
            </p>

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
                transition: "background 0.3s ease-in-out",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#007bb5")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#00a6fb")}
              onClick={handleRegisterClick}
            >
              View More Info
            </button>
          </SpotlightCard>
        </div>
      </div>

      <style>{`
        @keyframes blinking {
          0% { opacity: 1; }
          50% { opacity: 0; }
          100% { opacity: 1; }
        }
      `}</style>
    </div>
  );
}

export default Workshop;
