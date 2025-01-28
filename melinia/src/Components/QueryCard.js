import { Button, Card, Grid, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import React from 'react'
import contactUsImage from "../Assets/addon/contact.png"
import { FaArrowRight } from 'react-icons/fa'

function QueryCard() {

  const handleClick = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight - 700,
      behavior: 'smooth'
    });
  };
  return (
    <Box sx={{marginTop:{xs:"60px",md:"200px"}}} >
        <Box width="100%" sx={{height:"220px",background:"white",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
            <Container sx={{display:"flex",flexDirection:"row",alignItems:"center", justifyContent:{xs:'center', md:'flex-start'}}}>
                <Box sx={{display:{xs:"none",md:"block"}}}>
                    <img src={contactUsImage} style={{objectFit:"contain",marginTop:"-82px", marginLeft:'-50px'}}/>
                </Box>
                <Box display="flex" flexDirection="column" alignItems="center" height="100%">
                    <Box height="100%" display="flex" flexDirection="column" gap={2} sx={{justifyContent:{xs:"center",md:"flex-start"},alignItems:{xs:"center",md:"flex-start"}}}>
                        <span className='aboutFont' color="white" fontWeight="700" style={{ fontSize: { xs: "22px", md: "3em" }}}>QUERIES ON EVENTS</span>
                        <span className="rajdhaniFont" style={{color:'white'}}  textAlign="center">Feel free to reach out us if you’ve any queries regarding Melinia 2k23</span>
                        <Button className="buttonFont" style={{backgroundColor:'#61016e'}} variant="contained">Contact Us <FaArrowRight style={{marginLeft:'3px'}} /></Button>

                    </Box>
                </Box>
            </Container>
        </Box>
    </Box>
  )
}

export default QueryCard