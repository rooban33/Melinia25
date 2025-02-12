import React, { useState, useEffect } from "react";
import mixpanel from "mixpanel-browser";
import SpotlightCard from "./SpotlightCard/SpotlightCard";
import hackathonicon from "../Assets/icons/hackathon.png";
import pitch from "../Assets/icons/pitch.png";

function Workshop() {
  const [ideathonSlots, setIdeathonSlots] = useState(0);
  const [hackathonSlots, setHackathonSlots] = useState(0);

  // Fetch available seats for both events in parallel
  useEffect(() => {
    const fetchSlots = async () => {
      try {
        const [ideathonRes, hackathonRes] = await Promise.all([
          fetch("https://melinia-backend-6hoh.onrender.com/available_seats/ideathon"),
          fetch("https://melinia-backend-6hoh.onrender.com/available_seats/hackathon"),
        ]);

        const ideathonData = await ideathonRes.json();
        const hackathonData = await hackathonRes.json();

        setIdeathonSlots(ideathonData.available_seats);
        setHackathonSlots(hackathonData.available_seats);
      } catch (error) {
        console.error("Error fetching slots:", error);
      }
    };

    fetchSlots();
  }, []);

  const handleRegisterClick1 = () => {
    mixpanel.track("Hackathon button clicked", { page: "home" });
    window.open("https://unstop.com/o/FoaGhvO", "_blank");
  };

  const handleRegisterClick = () => {
    mixpanel.track("Pitch Pit button clicked", { page: "home" });
    window.open("https://unstop.com/o/IGpR5Js?lb=PETC6GS6", "_blank");
  };

  // Blinking effect for low slots
  const blinkingStyle = {
    animation: "blinking 1s infinite",
  };

  return (
    <div className="workshopMainBox">
      <div
        className="aboutBox"
        style={{
          marginBottom: "30px",
          textAlign: "center",
          display: "grid",
          justifyContent: "center",
        }}
      >
        {/* Centered Title */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            marginBottom: "20px",
          }}
        >
          <span className="workshopFont font-weight-bold ds-digib-text">
            FLAGSHIP EVENTS
          </span>
        </div>

        {/* Events Grid */}
        <div className="events-grid">
          {/* Hackathon Card */}
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
            <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
              <img src={hackathonicon} alt="Hackathon Logo" style={{ width: "60px", height: "60px", marginBottom: "10px" }} />
            </div>
            <h3 className="greater-theory-text" style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "10px" }}>
              Hackathon 2025
            </h3>
            <p className="coco-gothic-text" style={{ fontSize: "14px", opacity: "0.9", marginBottom: "15px" }}>
            Melinia Hackathon is a premier innovation-driven competition designed to foster creativity, problem-solving skills, and collaboration among participants. This flagship event challenges students to develop groundbreaking solutions to real-world problems across diverse domains, pushing the boundaries of technology and innovation.  </p>
            <p style={{ fontSize: "12px", fontWeight: "500", opacity: "0.8", marginBottom: "10px" }}>
              📍 MBCH | 🗓️ March 5-7, 2025
            </p>
            <p style={{ fontSize: "16px", fontWeight: "bold", marginBottom: "10px", ...(hackathonSlots < 10 ? blinkingStyle : {}) }}>
              Slots Available: 12
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

          {/* Pitch Pit Card */}
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
          >
            <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
              <img src={pitch} alt="Pitch Logo" style={{ width: "60px", height: "60px", marginBottom: "10px" }} />
            </div>
            <h3 className="greater-theory-text" style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "10px" }}>
              The Pitch Pit 2025
            </h3>
            <p className="coco-gothic-text"  style={{ fontSize: "14px", opacity: "0.9", marginBottom: "15px" }}>
            The Pitch Pit is an exciting opportunity to present your ideas, receive expert guidance, and gain the support needed to turn your vision into reality. More than just an ideathon, this platform encourages innovation across both technical and non-technical fields. Participants are challenged to develop creative solutions to real-world problems.</p>
            <p style={{ fontSize: "12px", fontWeight: "500", opacity: "0.8", marginBottom: "10px" }}>
              📍 IT 212, IT 213 | 🗓️ March 7, 2025
            </p>
            <p style={{ fontSize: "16px", fontWeight: "bold", marginBottom: "10px", ...(ideathonSlots < 10 ? blinkingStyle : {}) }}>
              Slots Available: 52
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
             onClick={handleRegisterClick}>View More Info</button>
          </SpotlightCard>
        </div>
      </div>

      <style>{`
        @keyframes blinking {
          50% { opacity: 0; }
        }
      `}</style>
    </div>
  );
}

export default Workshop;
