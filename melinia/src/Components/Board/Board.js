import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import stanleysImage from "../../Assets/crew/stanleycurrent.jpg";
import keerthiImage from '../../Assets/crew/keerthikaEdited.jpg';
import manjuImage from '../../Assets/crew/manjumamEdited.jpg';
import sujithraImage from '../../Assets/crew/sujithraMamEdited.jpg';
import praveen from '../../Assets/crew/praveenEdited.jpg'
import hemaImage from '../../Assets/crew/hemaShreeEdited.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import '@fontsource/poppins'; // Import Poppins font
import '@fontsource/montserrat'; // Import Montserrat font
import { display, styled } from "@mui/system";
import rohith from '../../Assets/crew/rohitEdited.jpg';
import abhinaya from "../../Assets/crew/abhinayaqEdited.jpg";
import susmaMondal from "../../Assets/crew/susmaEdited.jpg";
import prakalya from "../../Assets/crew/prakalyaEdited.jpg";
import abhirami from "../../Assets/crew/abhiramiEdited.jpg";
import aswath from "../../Assets/crew/ashwathEdited.jpg";
import bhupesh from "../../Assets/crew/bhupeshEdited.jpg"
import { Particle } from "../ParticlesBackground";
import "./Board.css";

const StyledTypography = styled(Typography)({
  fontSize: "2.5rem",
  fontWeight: 700,
  // color: "#4a4a4a", // Dark gray color for an antique look
  color: 'rgb(18, 2, 98)',
  textAlign: "center",
  marginBottom: "20px",
  fontFamily: "serif", // Use a serif font for a manuscript feel
  letterSpacing: "1px",
  textTransform: "uppercase",
  // borderBottom: "2px solid #4a4a4a",
},
);
class Board extends React.Component {

  cardDataTeachers = [
    {
      name: "Dr.V.Keerthika",
      role: "Faculty Coordinator",
      role1:"Event Management",
      department: "Department of Computing",
      phone: "0422-2574071",
      email: "vkeerthika@cit.edu.in",
      image: keerthiImage,
    },
    {
      name: "Dr.D.Manju",
      role: "Faculty Coordinator",
      role1:"Event Management",
      department: "Department of Computing",
      phone: "0422-2574071",
      email: "manju@cit.edu.in",
      image: manjuImage,
    },
    {
      name: "Dr.M.Sujithra",
      role: "Faculty Coordinator",
      role1:"Technical Events",
      department: "Department of Computing",
      phone: "0422-2574071",
      email: "sujithra@cit.edu.in",
      image: sujithraImage,
    },
    {
      name: "Mrs.P Hemashree",
      role: "Faculty Coordinator",
      role1:"Non-Technical Events",
      department: "Department of Computing",
      phone: "0422-2574071",
      email: "hemashree@cit.edu.in",
      image: hemaImage,
    },

  ];

  cardDataCMSEC = [
    {
      name: "Abinaya S",
      role: "Chairperson",
      department: "M.Sc. Artificial Intelligence and Machine Learning",
      phone: "9994883560",
      email: "2034002aiml@cit.edu.in",
      image: abhinaya,
    },
    {
      name: "Rohith S",
      role: "Secretary",
      department: "M.Sc. Software Systems",
      phone: "9655898111",
      email: "2031036mss@cit.edu.in",
      image: rohith,
    }
  ]

  cardJointSecTreasurer = [
    {
      name: "Aswath A R",
      role: "Joint Secretary ",
      department: "M.Sc. Software Systems",
      phone: "9943263888",
      email: "2031008mss@cit.edu.in",
      image: aswath,
    },
    {
      name: "Praveen Kumar M",
      role: "Treasurer",
      department: "M.Sc. Software Systems",
      phone: "9600224398",
      email: "2031033mss@cit.edu.in",
      image: praveen,
    }
  ]

  cardStudentCoordinators = [
    {
      name: "Susma Mondal R",
      role: "Event Head Coordinator",
      department: "M.Sc. Decision and Computing Sciences",
      phone: "9843736523",
      email: "2033035mdcs@cit.edu.in",
      image: susmaMondal,
    },
    {
      name: "Abirami R",
      role: "Event Head Coordinator",
      department: "M.Sc. Decision and Computing Sciences",
      phone: "9003764378",
      email: "2033002mdcs@cit.edu.in",
      image: abhirami,
    },
    {
      name: "Prakalya B S",
      role: "Event Head Coordinator",
      department: "M.Sc. Data Science",
      phone: "9488038087",
      email: "2032031mds@cit.edu.in",
      image: prakalya,
    },
    {
      name: "Bhupesh P S",
      role: "Event Head Coordinator ",
      department: "M.Sc. Data Science",
      phone: "9994615335",
      email: "2032008mds@cit.edu.in",
      image: bhupesh,
    }
  ]
  render() {
    return (
      <div>
        <div style={{ backgroundColor: '#d9d2e9', marginTop: '100px' }}>
          <Particle></Particle>
          <br></br><br></br>
          <section style={{ display: 'flex', justifyContent: 'center' }}>
            <Card
              sx={{
                borderBottom: '10px solid #2C2244',
                borderRadius: '18px',
                width: '85%',
                maxWidth: '355px', // Adjust the max width as needed
                margin: '20px', // Adjust the margin as needed
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                fontFamily: 'Poppins, sans-serif',
                transition: 'transform 0.3s ease-in-out',
                zIndex:"100",
                padding: '15px',
                backgroundColor: '#f0f0f0',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
                '@media (max-width: 600px)': {
                  maxWidth: '90%',
                },
                '@media (min-width: 601px) and (max-width: 950px)': {
                  maxWidth: '30%',
                },
                '@media (min-width: 950px) and (max-width: 1231px)': {
                  maxWidth: '250px',
                },
                '@media (min-width: 1231px) and (max-width: 1440px)': {
                  maxWidth: '250px',
                },
                // backgroundColor: '#f2f2f2 !important',
                backgroundColor: '#f0f0f0'
              }}
            >
              {/* ... (Existing card content) */}
              <CardMedia
                component="img"
                alt="Stanley"
                height="auto"
                image={stanleysImage}
              />
              <CardContent sx={{ padding: '0px', paddingTop: '7px', fontFamily: '"Raleway", serif !important' }}>
                <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 'bold', fontSize: '1.5rem' }}>
                  <span style={{ fontFamily: '"Raleway", serif !important' }}>Dr. C. Stanly Felix</span>
                </Typography>
                <Typography variant="body1" display="block" gutterBottom sx={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 'bolder', color: '#555', fontSize: '1rem' }}>
                  <span style={{ fontFamily: '"Raleway", serif !important' }}>Faculty Advisor</span>
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ fontFamily: 'Montserrat, sans-serif', color: '#777', fontSize: '0.9rem' }}>
                  <span style={{ fontFamily: '"Raleway", serif !important' }}>Department of Computing</span>
                </Typography>
              </CardContent>
              <CardContent sx={{ padding: '0px', paddingTop: '7px' }}>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
                  <FontAwesomeIcon icon={faPhone} style={{ fontSize: '20px', color: '#3498db' }} />
                  <Typography variant="body1" display="block" gutterBottom onClick={() => window.location.href = `tel:${'0422-2574071'}`} sx={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 'bolder', color: '#555', fontSize: '1rem' }}>
                    <span style={{ fontFamily: '"Raleway", serif !important', cursor: 'pointer' }}>0422-2574071</span>
                  </Typography>
                </div>
              </CardContent>
              <CardContent sx={{ padding: '0px', paddingTop: '7px' }}>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
                  <FontAwesomeIcon icon={faEnvelope} style={{ fontSize: '20px', color: '#3498db', marginLeft: '0%' }} />
                  <Typography variant="body1" display="block" onClick={() => window.location.href = `mailto:${'stanlyfelix@cit.edu.in'}`} gutterBottom sx={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 'bolder', color: '#555', fontSize: '1rem' }}>
                    <span style={{ fontFamily: '"Raleway", serif !important', cursor: 'pointer' }}>stanlyfelix@cit.edu.in</span>
                  </Typography>
                </div>
              </CardContent>
            </Card>
          </section>
          <br></br><br></br>
          {/* New row of four cards */}
          {/* <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}> */}
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', position: 'relative', zIndex: '100' }}>
            {this.cardDataTeachers.map((data, index) => (
              <Card
                key={index}
                sx={{
                  borderBottom: '10px solid #2C2244',
                  borderRadius: '18px',
                  width: '100%',
                  maxWidth: '250px', // Adjust the maximum width as needed
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  fontFamily: 'Poppins, sans-serif',
                  transition: 'transform 0.3s ease-in-out',
                  margin: '0 10px 20px',
                  padding: '15px',
                  '&:hover': {
                    transform: 'scale(1.05)',
                  },
                  '@media (max-width: 600px)': {
                    marginTop: '10px',
                    // maxWidth: '100%',
                    maxWidth: '85%',
                    //   margin: '0 5px 20px',
                  },
                  '@media (min-width: 601px) and (max-width: 950px)': {
                    maxWidth: '30%',
                  },
                  '@media (min-width: 950px) and (max-width: 1231px)': {
                    // maxWidth: '25%',
                    maxWidth: '250px',
                  },
                  '@media (min-width: 1231px) and (max-width: 1440px)': {
                    // maxWidth: '20%',
                    maxWidth: '250px'
                  },
                  backgroundColor: '#f0f0f0 !important',
                }}
              >
                {/* ... (Card content for new row) */}
                <CardMedia
                  component="img"
                  alt={data.name}
                  height="320px"
                  className="image-fit"
                  image={data.image}

                  sx={{
                    '@media (max-width: 600px)': {
                      height: "auto"
                    },

                  }}
                />
                <CardContent sx={{ padding: '0px', paddingTop: '7px' }}>
                  <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 'bold', fontSize: '1.5rem' }}>
                    <span style={{ fontFamily: '"Raleway", serif !important' }}>{data.name}</span>
                  </Typography>
                  <Typography variant="body1" display="block" gutterBottom sx={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 'bolder', color: '#555', fontSize: '0.85rem' }}>
                    <span style={{ fontFamily: '"Raleway", serif !important' }}>{data.role}</span>
                  </Typography>
                  <Typography variant="body1" display="block" gutterBottom sx={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 'bolder', color: '#555', fontSize: '0.85rem' }}>
                    <span style={{ fontFamily: '"Raleway", serif !important' }}>{data.role1}</span>
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ fontFamily: 'Montserrat, sans-serif', color: '#777', fontSize: '0.9rem' }}>
                    <span style={{ fontFamily: '"Raleway", serif !important' }}>{data.department}</span>
                  </Typography>
                </CardContent>
                <CardContent sx={{ padding: '0px', paddingTop: '7px' }}>
                  <div style={{ cursor: 'pointer', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
                    <FontAwesomeIcon icon={faPhone} style={{ fontSize: '20px', color: '#3498db' }} />
                    <Typography variant="body1" display="block" gutterBottom sx={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 'bolder', color: '#555', fontSize: '1rem' }}
                      onClick={() => window.location.href = `tel:${data.phone}`}
                    >
                      <span style={{ fontFamily: '"Raleway", serif !important' }}>{data.phone}</span>
                    </Typography>
                  </div>
                </CardContent>
                <CardContent sx={{ padding: '0px', paddingTop: '7px' }}>
                  <div style={{ cursor: 'pointer', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
                    <FontAwesomeIcon icon={faEnvelope} style={{ fontSize: '20px', color: '#3498db', marginLeft: '0%' }} />
                    <Typography variant="body1" display="block" gutterBottom sx={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 'bolder', color: '#555', fontSize: '1rem' }}
                      onClick={() => window.location.href = `mailto:${data.email}`}
                    >
                      <span style={{ fontFamily: '"Raleway", serif !important' }}>{data.email}</span>
                    </Typography>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          {/* <div>      <Typography variant="h4" gutterBottom>
        Office Bearers
      </Typography></div> */}

          <br></br>
          <div>
            {/* Use the StyledTypography component */}
            <StyledTypography variant="h4" gutterBottom >
              <span style={{ fontFamily: '"Raleway", serif !important' }}>
                Office Bearers
              </span>
            </StyledTypography>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', flexWrap: 'wrap', position: 'relative', zIndex: '100' }}>
            {this.cardDataCMSEC.map((data, index) => (
              <Card
                key={index}
                sx={{
                  borderBottom: '10px solid #2C2244',
                  borderRadius: '18px',
                  width: '100%',
                  maxWidth: '270px', // Adjust the maximum width as needed
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  fontFamily: 'Poppins, sans-serif',
                  transition: 'transform 0.3s ease-in-out',
                  margin: '0 10px 20px',
                  padding: '15px',
                  '&:hover': {
                    transform: 'scale(1.05)',
                  },
                  '@media (max-width: 600px)': {
                    marginTop: '10px',
                    // maxWidth: '100%',
                    maxWidth: '85%',
                    //   margin: '0 5px 20px',
                  },
                  '@media (min-width: 601px) and (max-width: 1239px)': {
                    // maxWidth: '28%',
                    maxWidth: '270px'
                  },
                  '@media (min-width: 1239px) and (max-width: 1440px)': {
                    // maxWidth: '20%',
                    maxWidth: '270px'
                  },
                  backgroundColor: '#f0f0f0 !important',
                }}
              >
                {/* ... (Card content for new row) */}
                <CardMedia
                  component="img"
                  alt="Image"
                  height="320px"
                  className="image-fit"
                  image={data.image}
                />
                <CardContent sx={{ padding: '0px', paddingTop: '7px' }}>
                  <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 'bold', fontSize: '1.5rem' }}>
                    <span style={{ fontFamily: '"Raleway", serif !important' }}>{data.name}</span>
                  </Typography>
                  <Typography variant="body1" display="block" gutterBottom sx={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 'bolder', color: '#555', fontSize: '1rem' }}>
                    <span style={{ fontFamily: '"Raleway", serif !important' }}>{data.role}</span>
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ fontFamily: 'Montserrat, sans-serif', color: '#777', fontSize: '0.9rem' }}>
                    <span style={{ fontFamily: '"Raleway", serif !important' }}>{data.department}</span>
                  </Typography>
                </CardContent>
                <CardContent sx={{ padding: '0px', paddingTop: '7px' }}>
                  <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
                    <FontAwesomeIcon icon={faPhone} style={{ fontSize: '20px', color: '#3498db' }} />
                    <Typography variant="body1" display="block" gutterBottom sx={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 'bolder', color: '#555', fontSize: '1rem' }}
                      onClick={() => window.location.href = `tel:${data.phone}`}
                    >
                      <span style={{ fontFamily: '"Raleway", serif !important' }}>{data.phone}</span>
                    </Typography>
                  </div>
                </CardContent>
                <CardContent sx={{ padding: '0px', paddingTop: '7px' }}>
                  <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
                    <FontAwesomeIcon icon={faEnvelope} style={{ fontSize: '20px', color: '#3498db', marginLeft: '0%' }} />
                    <Typography variant="body1" display="block" gutterBottom sx={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 'bolder', color: '#555', fontSize: '1rem' }}
                      onClick={() => window.location.href = `mailto:${data.email}`}
                    >
                      <span style={{ fontFamily: '"Raleway", serif !important' }}>{data.email}</span>
                    </Typography>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <br></br>
          <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', flexWrap: 'wrap', position: 'relative', zIndex: '100' }}>
            {this.cardJointSecTreasurer.map((data, index) => (
              <Card
                key={index}
                sx={{
                  borderBottom: '10px solid #2C2244',
                  borderRadius: '18px',
                  width: '100%',
                  maxWidth: '270px', // Adjust the maximum width as needed
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  fontFamily: 'Poppins, sans-serif',
                  transition: 'transform 0.3s ease-in-out',
                  margin: '0 10px 20px',
                  padding: '15px',
                  '&:hover': {
                    transform: 'scale(1.05)',
                  },
                  '@media (max-width: 600px)': {
                    marginTop: '10px',
                    // maxWidth: '100%',
                    maxWidth: '85%',
                    //   margin: '0 5px 20px',
                  },
                  '@media (min-width: 601px) and (max-width: 1239px)': {
                    // maxWidth: '28%',
                    maxWidth: '270px'
                  },
                  '@media (min-width: 1239px) and (max-width: 1440px)': {
                    // maxWidth: '20%',
                    maxWidth: '270px'
                  },
                  backgroundColor: '#f0f0f0 !important',
                }}
              >
                {/* ... (Card content for new row) */}
                <CardMedia
                  component="img"
                  alt="Image"
                  height="320px"
                  className="image-fit"
                  image={data.image}
                />
                <CardContent sx={{ padding: '0px', paddingTop: '7px' }}>
                  <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 'bold', fontSize: '1.5rem' }}>
                    <span style={{ fontFamily: '"Raleway", serif !important' }}>{data.name}</span>
                  </Typography>
                  <Typography variant="body1" display="block" gutterBottom sx={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 'bolder', color: '#555', fontSize: '1rem' }}>
                    <span style={{ fontFamily: '"Raleway", serif !important' }}>{data.role}</span>
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ fontFamily: 'Montserrat, sans-serif', color: '#777', fontSize: '0.9rem' }}>
                    <span style={{ fontFamily: '"Raleway", serif !important' }}>{data.department}</span>
                  </Typography>
                </CardContent>
                <CardContent sx={{ padding: '0px', paddingTop: '7px' }}>
                  <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
                    <FontAwesomeIcon icon={faPhone} style={{ fontSize: '20px', color: '#3498db' }} />
                    <Typography variant="body1" display="block" gutterBottom sx={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 'bolder', color: '#555', fontSize: '1rem' }}
                      onClick={() => window.location.href = `tel:${data.phone}`}
                    >
                      <span style={{ fontFamily: '"Raleway", serif !important' }}>{data.phone}</span>
                    </Typography>
                  </div>
                </CardContent>
                <CardContent sx={{ padding: '0px', paddingTop: '7px' }}>
                  <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
                    <FontAwesomeIcon icon={faEnvelope} style={{ fontSize: '20px', color: '#3498db', marginLeft: '0%' }} />
                    <Typography variant="body1" display="block" gutterBottom sx={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 'bolder', color: '#555', fontSize: '1rem' }}
                      onClick={() => window.location.href = `mailto:${data.email}`}
                    >
                      <span style={{ fontFamily: '"Raleway", serif !important' }}>{data.email}</span>
                    </Typography>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <br></br>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', position: 'relative', zIndex: '100' }}>
            {this.cardStudentCoordinators.map((data, index) => (
              <Card
                key={index}
                sx={{
                  borderBottom: '10px solid #2C2244',
                  borderRadius: '18px',
                  width: '100%',
                  maxWidth: '270px', // Adjust the maximum width as needed
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  fontFamily: 'Poppins, sans-serif',
                  transition: 'transform 0.3s ease-in-out',
                  margin: '0 10px 20px',
                  padding: '15px',
                  '&:hover': {
                    transform: 'scale(1.05)',
                  },
                  '@media (max-width: 600px)': {
                    marginTop: '10px',
                    // maxWidth: '100%',
                    maxWidth: '85%',
                    //   margin: '0 5px 20px',
                  },
                  '@media (min-width: 601px) and (max-width: 1231px)': {
                    // minWidth: '25%',
                    maxWidth: '270px'
                  },
                  '@media (min-width: 1231px) and (max-width: 1440px)': {
                    // minWidth: '20%',
                    maxWidth: '270px'
                  },
                  backgroundColor: '#f0f0f0 !important',
                }}
              >
                {/* ... (Card content for new row) */}
                <CardMedia
                  component="img"
                  alt="Image"
                  height="320px"
                  className="image-fit"
                  image={data.image}
                />
                <CardContent sx={{ padding: '0px', paddingTop: '7px' }}>
                  <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 'bold', fontSize: '1.5rem' }}>
                    <span style={{ fontFamily: '"Raleway", serif !important' }}>{data.name}</span>
                  </Typography>
                  <Typography variant="body1" display="block" gutterBottom sx={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 'bolder', color: '#555', fontSize: '1rem' }}>
                    <span style={{ fontFamily: '"Raleway", serif !important' }}>{data.role}</span>
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ fontFamily: 'Montserrat, sans-serif', color: '#777', fontSize: '0.9rem' }}>
                    {data.department}
                  </Typography>
                </CardContent>
                <CardContent sx={{ padding: '0px', paddingTop: '7px' }}>
                  <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
                    <FontAwesomeIcon icon={faPhone} style={{ fontSize: '20px', color: '#3498db', marginLeft: '0%' }} />
                    <Typography variant="body1" display="block" gutterBottom sx={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 'bolder', color: '#555', fontSize: '1rem' }}
                      onClick={() => window.location.href = `tel:${data.phone}`}
                    >
                      <span style={{ fontFamily: '"Raleway", serif !important' }}>{data.phone}</span>
                    </Typography>
                  </div>
                </CardContent>
                <CardContent sx={{ padding: '0px', paddingTop: '7px' }}>
                  <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
                    <FontAwesomeIcon icon={faEnvelope} style={{ fontSize: '20px', color: '#3498db' }} />
                    <Typography variant="body1" display="block" gutterBottom sx={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 'bolder', color: '#555', fontSize: '1rem' }}
                      onClick={() => window.location.href = `mailto:${data.email}`}
                    >
                      <span style={{ fontFamily: '"Raleway", serif !important' }}>{data.email}</span>
                    </Typography>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <br></br>
        </div>
      </div>

    );
  }
}

export default Board;