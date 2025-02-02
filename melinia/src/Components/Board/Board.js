import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import "@fontsource/poppins";
import "@fontsource/montserrat";
import { styled } from "@mui/system";
import { Particle } from "../ParticlesBackground";
import "./Board.css";
import stanleyImage from '../../Assets/crew/stanley.jpg';
import deivaraniImage from '../../Assets/crew/deivarani.jpg';
import manjuImage from '../../Assets/crew/manju.jpg';
import kavithaImage from '../../Assets/crew/kavitha.jpg';
import suvethaImage from '../../Assets/crew/suvetha.jpeg';
import mohanImage from '../../Assets/crew/mohan.jpeg';
import dharunImage from '../../Assets/crew/dharun.jpg';
import naveenImage from '../../Assets/crew/naveen.jpg';

const StyledTypography = styled(Typography)({
  fontSize: "2.5rem",
  fontWeight: 700,
  color: "rgba(255, 255, 255, 0.9)",
  textAlign: "center",
  marginBottom: "20px",
  fontFamily: "Poppins, sans-serif",
  textTransform: "uppercase",
  backdropFilter: "blur(10px)",
  padding: "10px 20px",
  borderRadius: "12px",
  background: "rgba(255, 255, 255, 0.1)",
});

const GlassCard = styled(Card)({
  borderRadius: "18px",
  width: "100%",
  maxWidth: "280px",
  backdropFilter: "blur(15px)",
  background: "rgba(255, 255, 255, 0.15)",
  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
  transition: "transform 0.3s ease-in-out",
  padding: "20px",
  '&:hover': {
    transform: "scale(1.05)",
    boxShadow: "0 12px 40px rgba(0, 0, 0, 0.4)",
  },
});

class Board extends React.Component {
  cardDataTeachers = [
    {
      name: "Dr.C.Stanly Felix PhD",
      role: "Faculty Coordinator",
      department: "Department of Computing",
      phone: "+917845738898",
      email: "stanlyfelix@cit.edu.in",
      image: stanleyImage,
    },
    {
      name: "Ms.S.Deivarani MCA.,M.Phil",
      role: "Faculty Coordinator",
      department: "Department of Computing",
      phone: "+919486624020",
      email: "deivarani@cit.edu.in",
      image: deivaraniImage,
    },
    {
      name: "Dr.D.Manju M.C.A,M.Phil,Ph.D",
      role: "Faculty Coordinator",
      department: "Department of Computing",
      phone: "+919865229679",
      email: "manju@cit.edu.in",
      image: manjuImage,
    },
    {
      name: "Dr.D. KAVITHA MCA,M.Phil,PhD",
      role: "Faculty Coordinator",
      department: "Department of Computing",
      phone: "+918248164968",
      email: "kavithad@cit.edu.in",
      image: kavithaImage,
    },
  ];

  cardDataStudent = [
    {
      name: "Suvetha A R",
      role: "Faculty Coordinator",
      department: "Department of Computing",
      phone: "+917845738898",
      email: "stanlyfelix@cit.edu.in",
      image: suvethaImage,
    },
    {
      name: "Mohan Raj M",
      role: "Faculty Coordinator",
      department: "Department of Computing",
      phone: "+919486624020",
      email: "deivarani@cit.edu.in",
      image: mohanImage,
    },
    {
      name: "Dharun",
      role: "Faculty Coordinator",
      department: "Department of Computing",
      phone: "+919865229679",
      email: "manju@cit.edu.in",
      image: dharunImage,
    },
    {
      name: "Naveen",
      role: "Faculty Coordinator",
      department: "Department of Computing",
      phone: "+918248164968",
      email: "kavithad@cit.edu.in",
      image: naveenImage,
    },
  ];

  render() {
    return (
      <div style={{ backgroundColor: "#1a1a2e", padding: "100px 0" }}>
        <Particle />
        <StyledTypography variant="h4">Meet the Team</StyledTypography>
        <div className="board-container">
          {this.cardDataTeachers.map((data, index) => (
            <GlassCard key={index}>
              <CardMedia component="img" alt={data.name} height="320px" image={data.image} className="image-fit" />
              <CardContent>
                <Typography variant="h5" className="card-title">{data.name}</Typography>
                <Typography variant="body1" className="card-subtitle" style={{paddingTop:"0.5rem"}}>{data.role}</Typography>
                <Typography variant="body2" className="card-text" style={{paddingTop:"0.5rem"}}>{data.department}</Typography>
              </CardContent>
              <CardContent className="contact-icons">
                <FontAwesomeIcon icon={faPhone} className="icon" onClick={() => window.location.href = `tel:${data.phone}`} />
                <FontAwesomeIcon icon={faEnvelope} className="icon" onClick={() => window.location.href = `mailto:${data.email}`} />
              </CardContent>
            </GlassCard>
          ))}
        </div>
        <StyledTypography variant="h4">Student Coordinators</StyledTypography>
        <div className="board-container">
          {this.cardDataStudent.map((data, index) => (
            <GlassCard key={index}>
              <CardMedia component="img" alt={data.name} height="320px" image={data.image} className="image-fit" />
              <CardContent>
                <Typography variant="h5" className="card-title">{data.name}</Typography>
                <Typography variant="body1" className="card-subtitle" style={{paddingTop:"0.5rem"}}>{data.role}</Typography>
                <Typography variant="body2" className="card-text" style={{paddingTop:"0.5rem"}}>{data.department}</Typography>
              </CardContent>
              <CardContent className="contact-icons">
                <FontAwesomeIcon icon={faPhone} className="icon" onClick={() => window.location.href = `tel:${data.phone}`} />
                <FontAwesomeIcon icon={faEnvelope} className="icon" onClick={() => window.location.href = `mailto:${data.email}`} />
              </CardContent>
            </GlassCard>
          ))}
        </div>
      </div>
    );
  }
}

export default Board;
