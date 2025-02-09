import React, { useState, useEffect, useRef } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { useMediaQuery } from "react-responsive";
import { FiMoreVertical } from "react-icons/fi";

import { Link, useLocation, useNavigate } from 'react-router-dom';
import citlogo from '../Assets/logo/log.png';
import cit from '../Assets/logo/mobile.png';

const NavBar = () => {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const navbarRef = useRef(null);


  const location = useLocation();
  const navigate = useNavigate();

  const scrollHandler = () => {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
    if (expand) {
      updateExpanded(false);
    }
  };

  const handleScrollToEvents = () => {
    if (location.pathname === '/') {
      const eventsSection = document.getElementById('events');
      if (eventsSection) {
        eventsSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/');
      setTimeout(() => {
        const eventsSection = document.getElementById('events');
        if (eventsSection) {
          eventsSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 0);
    }
  };


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        updateExpanded(false);
      }
    };

    window.addEventListener("scroll", scrollHandler);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [expand]);

  return (
    <Navbar
      ref={navbarRef}
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container className="font">
        <Navbar.Brand href="/" className="d-flex">
          <img src={isMobile ? cit : citlogo}
            className={isMobile ? "mobile" : "logo"} alt="brand" />
        </Navbar.Brand>
        {isMobile ? (
          <FiMoreVertical
            onClick={() => {
              updateExpanded(!expand);
            }}
            style={{ color: "white", cursor: "pointer", fontSize: "4rem" }}
            className="navbar-toggler"
          />
        ) : ""}

        <Navbar.Collapse id="responsive-navbar-nav" style={{ display: "flex !important", visibility: "visible" }}>
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link className="scroll-link" as={Link} to="/" onClick={() => updateExpanded(false)}>
                Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link className="scroll-link" as={Link} to="/events" onClick={() => updateExpanded(false)}>
                Events
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                className="scroll-link"
                as={Link}
                to="/board"
                onClick={() => updateExpanded(false)}
              >
                Crew
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                className="scroll-link"
                as={Link}
                to="/gallery"
                onClick={() => updateExpanded(false)}
              >
                Gallery
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link className="scroll-link" as={Link} to="/contact" onClick={() => updateExpanded(false)}>
                Contact
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
