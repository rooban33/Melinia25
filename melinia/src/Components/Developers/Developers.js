import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import "@fontsource/poppins";
import "@fontsource/montserrat";
import { styled } from "@mui/system";
import { Particle } from "../ParticlesBackground";
import stanleyImage from '../../Assets/developers/shajith.jpeg';
import deivaraniImage from '../../Assets/crew/deivarani.jpg';
import manjuImage from '../../Assets/crew/manju.jpg';
import kavithaImage from '../../Assets/crew/kavitha.jpg';
import shajithImage from "../../Assets/developers/shajith.jpeg";
import lokheshImage from "../../Assets/developers/lokhesh.jpeg";
import pranavImage from "../../Assets/developers/pranav.jpeg";
import rajanImage from "../../Assets/developers/rajan.jpeg";

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

class Developers extends React.Component {
  cardDataUs = [
    {
      name: "Shajithrooban G G",
      role: "Web Developer",
      department: "M.Sc. Software Systems (4th Year)",
      phone: "+917845738898",
      email: "71762131045@cit.edu.in",
      linkedin: "https://www.linkedin.com/in/shajith-rooban-b26453221/", 
      instagram: "https://www.instagram.com/rooban_33/",
      image: shajithImage,
    },
    {
      name: "Pranavarul K",
      role: "Web Developer",
      department: "M.Sc. Software Systems (4th Year)",
      phone: "+919486624020",
      email: "71762131034@cit.edu.in",
      linkedin: "https://www.linkedin.com/in/pranavarul-karthikeyan-89945a223/",
      instagram: "https://www.instagram.com/_.pranav.19/",
      image: pranavImage,
    },
    {
      name: "Lokhesh R J",
      role: "Web Developer",
      department: "M.Sc. Software Systems (4th Year)",
      phone: "+919865229679",
      email: "71762131026@cit.edu.in",
      linkedin: "https://www.linkedin.com/in/lokheshrj/",
      instagram: "https://www.instagram.com/predatory_knight/",
      image: lokheshImage,
    },
    {
      name: "Rajarajan A P",
      role: "Web Developer",
      department: "M.Sc. Software Systems (4th Year)",
      phone: "+918248164968",
      email: "71762131038@cit.edu.in",
      linkedin: "https://www.linkedin.com/in/rajarajan-a-p/",
      instagram: "https://www.instagram.com/rajarajan_1105/",
      image: rajanImage,
    },
    {
      name: "Karthick Roshan",
      role: "Web Developer",
      department: "M.Sc. Software Systems (4th Year)",
      phone: "+918248164968",
      email: "71762131024@cit.edu.in",
      linkedin: "https://www.linkedin.com/in/karthick-roshan/",
      instagram: "https://www.instagram.com/karthick._.roshan/",
      image: kavithaImage,
    },
  ];


  render() {
    return (
      <div style={{ backgroundColor: "transparent", padding: "100px 0" }}>
        <Particle />
        <StyledTypography variant="h4">Development Team</StyledTypography>
        <div className="board-container">
          {this.cardDataUs.map((data, index) => (
            <GlassCard key={index}>
              <CardMedia component="img" alt={data.name} height="320px" image={data.image} className="image-fit" />
              <CardContent>
                <Typography variant="h5" className="card-title">{data.name}</Typography>
                <Typography variant="body1" className="card-subtitle" style={{ paddingTop: "0.5rem" }}>{data.role}</Typography>
                <Typography variant="body2" className="card-text" style={{ paddingTop: "0.5rem" }}>{data.department}</Typography>
              </CardContent>
              <CardContent className="contact-icons" style={{ display: "flex", justifyContent: "center", gap: "15px", paddingTop: "10px" }}>
              <FontAwesomeIcon icon={faPhone} className="icon" onClick={() => window.location.href = `tel:${data.phone}`} style={{ fontSize: "1.5rem", cursor: "pointer" }} />
              <FontAwesomeIcon icon={faEnvelope} className="icon" onClick={() => window.location.href = `mailto:${data.email}`} style={{ fontSize: "1.5rem", cursor: "pointer" }} />
              <FontAwesomeIcon icon={faLinkedin} className="icon" onClick={() => window.open(`${data.linkedin}`, "_blank")} style={{ fontSize: "1.5rem", cursor: "pointer"}} />
              <FontAwesomeIcon icon={faInstagram} className="icon" onClick={() => window.open(`${data.instagram}`, "_blank")} style={{ fontSize: "1.5rem", cursor: "pointer"}} />
            </CardContent>

            </GlassCard>
          ))}
        </div>
      </div>
    );
  }
}

export default Developers;
