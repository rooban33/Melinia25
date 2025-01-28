import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillMail,
  AiFillInstagram,
  AiFillYoutube,
} from "react-icons/ai";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

import './Footer.css';

function Footer() {
  const handleClick = () => {
    window.location.href = '/developers';
  };

  return (
    <Container fluid className="footer" style={{ zIndex: '10', position: 'relative', minHeight: "150px", display: "flex", flexDirection: "column", justifyContent: "space-around"}}>
      <Row className="justify-content-around">
        <Col xs={12} md={6} lg={4} className="contactus">
        <h3 className="d-none d-md-block" style={{ fontSize: "15px", color: "white" }}>For Updates..</h3>
          <a href="https://whatsapp.com/channel/0029VaMavcO0QeaqNYTjzW3u" style={{ textDecoration: "none", color: "white", fontSize: "20px" }}>
            Follow Our <FaWhatsapp /> channel
          </a>
        </Col>

        <Col xs={12} md={6} lg={4} className="dum">
          <div className="foot d-none d-md-block" style={{ fontSize: "20px", color: "white" }}>Our Connections</div>
          <div className="icons" style={{ display: "flex", justifyContent: "space-around", fontSize: "30px", color: "white" }}>
            <a href="mailto:melinia2k24@gmail.com" style={{ color: "white", textDecoration: 'none' }}>
              <AiFillMail />
            </a>

            <a href="https://www.linkedin.com/in/melinia-cit-91810926b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" style={{ color: "white", textDecoration: 'none' }}>
              <FaLinkedinIn />
            </a>

            <a href="https://www.instagram.com/melinia.cit/?igsh=MWdxdmM0a3Jzd2Z0dQ%3D%3D" style={{ color: "white", textDecoration: 'none' }}>
              <AiFillInstagram />
            </a>

            <a href="https://youtube.com/@meliniacit8188?si=SaWs2IP_NrfF4Ubh" style={{ color: "white", textDecoration: 'none' }}>
              <AiFillYoutube />
            </a>
          </div>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col xs={12} className="developed-with-love" style={{ fontSize: "15px", color: "white", textDecoration: "underline" }} onClick={handleClick}>
          Dev Team
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
