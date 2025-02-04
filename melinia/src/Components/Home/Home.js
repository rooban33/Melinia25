import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Particle } from "../ParticlesBackground";
import AboutMelinia from "../aboutMelinia";

//import melinia from "../../Assets/addon/meliniaposter.jpg"
import QueryCard from "../QueryCard";
import Workshop from "../workshop";
import Sponsors from "../Sponsers";
import ChiefGuest from "../ChiefGuest";
import Timeline from "../Timeline/Timeline";
import Contact from '../Contact/Contact';
import Events from '../Events/Events';
import yearsImage from '../../Assets/logo/years25.png';
import HeroSection from "./HeroSection/HeroSection";
import CountdownTimer from "../Timer";
function Home() {
  const [isEventCompleted, setCondition] = useState(false);

  return (
    <>
      <Particle />
      <section>
        <Container fluid className="home-section" id="home">
          <Container className="home-content">
            <Row>
              <Col className="home-header">
                <HeroSection yearsImage={yearsImage} isEventCompleted={isEventCompleted} />
              </Col>

            </Row>
          </Container>
          <Container style={{ margin: 0, padding: 0, minWidth: '100%', marginBottom: "30px" }}>
            {/* <AboutMelinia /> */}
            <CountdownTimer />
          </Container>
          {/* <Container style={{ margin: 0, padding: 0, minWidth: '100%',marginBottom:"30px" }}>
            <Events />
          </Container> */}
          <Container style={{ margin: 0, padding: 0, minWidth: '100%', marginBottom: "30px" }}>
            <Workshop />
          </Container>
          {/* <Container style={{ margin: 0, padding: 0, minWidth: '100%', marginBottom:"30px" }}>
            <QueryCard />
          </Container> */}
          <Container style={{ margin: 0, padding: 0, minWidth: '100%', marginBottom: "30px" }}>
            <Sponsors />
          </Container>
          <Container style={{ margin: 0, padding: 0, minWidth: '100%', marginBottom: "30px" }}>
            <ChiefGuest />
          </Container>

          <Container style={{ margin: 0, padding: 0, minWidth: '100%', marginBottom: "50px" }}>
            <Timeline />
          </Container>

          {/* <div class="divv" style={{color: 'white',fontSize:'1.6rem',fontWeight: 700,fontFamily: "Audiowide"}}>Feel</div> */}





          {/* <Container style={{ margin: 0, padding: 0, minWidth: '100%', marginBottom:"0px" }}>
            <Contact />
          </Container> */}
        </Container>
      </section>
    </>
  );
}

export default Home;
