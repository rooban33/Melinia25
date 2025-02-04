import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillMail, AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

import './Footer.css';

function Footer() {
  const handleClick = () => {
    window.location.href = "/developers";
  };

  return (
    <Container 
      fluid 
      className="footer"
      style={{
        zIndex: "10",
        position: "relative",
        minHeight: "150px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        background: "rgb(73 72 72 / 20%)",  // Semi-transparent white
        backdropFilter: "blur(10px)",  // Glassmorphism effect
        WebkitBackdropFilter: "blur(10px)",  // Safari support
        borderRadius: "10px",
        padding: "20px",
      }}
    >
      <Row className="justify-content-around text-center">
        <Col xs={12} md={6} lg={4} className="contactus">
          <h3 className="d-none d-md-block" style={{ fontSize: "16px", color: "black", fontWeight: "bold" }}>
            Stay Updated
          </h3>
          <a 
            href="https://chat.whatsapp.com/Cta0Ye1ZoEb1aSXnheUZsV" 
            style={{ textDecoration: "none", color: "green", fontSize: "18px", fontWeight: "500", transform:"fontSize: '25px'" }}
          >
            Follow Our <FaWhatsapp /> Channel
          </a>
        </Col>

        <Col xs={12} md={6} lg={4} className="dum">
          <div className="foot d-none d-md-block" style={{ fontSize: "18px", color: "white", fontWeight: "bold", marginBottom: "10px" }}>
            Connect With Us
          </div>
          <div className="icons" style={{ display: "flex", justifyContent: "center", gap: "20px", fontSize: "28px" }}>
  <a href="mailto:melinia2k24@gmail.com" className="footer-icon footer-icon-mail">
    <span><AiFillMail /></span>
  </a>
  <a href="https://www.linkedin.com/in/melinia-cit-91810926b" className="footer-icon footer-icon-ln">
    <span><FaLinkedinIn /></span>
  </a>
  <a href="https://www.instagram.com/melinia.cit" className="footer-icon footer-icon-ig">
    <span><AiFillInstagram /></span>
  </a>
  <a href="https://youtube.com/@meliniacit8188" className="footer-icon footer-icon-yt">
    <span><AiFillYoutube /></span>
  </a>
  <a href="https://chat.whatsapp.com/Cta0Ye1ZoEb1aSXnheUZsV" className="footer-icon footer-icon-wa">
    <span><FaWhatsapp /></span>
  </a>
</div>


        </Col>
      </Row>

      <Row className="justify-content-center py-3">
      <Col 
        xs={12} 
        className="text-center"
        style={{
          fontSize: "14px",
          color: "white",
          fontWeight: "500",
          cursor: "pointer",
          position: "relative",
          display: "inline-block",
        }}
      >
        <motion.span 
          onClick={handleClick}
          whileHover={{ scale: 1.1 }}
          style={{ display: "inline-block" }}
        >
          Brought to life by 
          <span 
            style={{
              textDecoration: "underline",
              marginLeft: "5px",
              position: "relative",
            }}
          >
            Dev Team
            <span 
              style={{
                content: '""',
                position: "absolute",
                left: 0,
                bottom: "-2px",
                width: "100%",
                height: "2px",
                background: "white",
                transform: "scaleX(0)",
                transformOrigin: "right",
                transition: "transform 0.3s ease-out",
              }}
              className="underline"
            />
          </span>
        </motion.span>
      </Col>
    </Row>
    </Container>
  );
}

export default Footer;