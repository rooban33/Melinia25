import React from 'react';
import { Card } from 'react-bootstrap';
import abhi from '../../Assets/developers/abhiniveshCompress.jpg'
import janu from '../../Assets/developers/janumathi.jpg'
import susma from '../../Assets/developers/susmaCompress.png'
import rithik from '../../Assets/developers/rithik.png'
import "./Developers.css"
import {
  AiFillMail,
  AiFillInstagram,
  AiFillPhone,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";



const developers = [
  {
    name: 'Abhinivesh S',
    department: 'MSc DCS',
    email: 'abhinivi67@gmail.com',
    linkedin: 'https://www.linkedin.com/in/abhinivesh0305/',
    instagram: 'https://www.instagram.com/sound_of_keys/',
    phone: '9345884174',
    photoUrl: abhi,
  },
  {
    name: 'Susma V',
    department: 'MSc SS',
    email: 'susmav1012@gmail.com',
    linkedin: 'https://www.linkedin.com/in/susmav?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    instagram: 'https://www.instagram.com/susmavijayakumar?igsh=MTN6dGx1dWs3dXlieQ==',
    phone: '6385480548',
    photoUrl: susma,
  },
  {
    name: 'Janumathi G P',
    department: 'MSc SS',
    email: 'janusivan05@gmail.com',
    linkedin: 'https://www.linkedin.com/in/janumathi-g-p/',
    phone: '9360628869',
    photoUrl: janu,
  },
  {
    name: 'Rithik Suthan ',
    department: 'MSc SS',
    email: 'rithiksuthan123@gmail.com',
    linkedin: 'https://www.linkedin.com/in/rithiksuthan/',
    instagram: 'https://www.instagram.com/rithik_suthan/',
    phone: '6383704021',
    photoUrl: rithik,
  },
];


const Developers = () => {
  return (
    <>


      <h3 className="aboutFont" style={{ marginTop: '100px', textAlign:"center", right:"0 !important"}}>DEVELOPMENT TEAM</h3>


      <div className="develop d-flex flex-wrap justify-content-around" style={{ margin: '50px' }}>

        {developers.map((developer, index) => (
          <Card key={index} className="mb-4" style={{ width: '18rem', backgroundColor: 'transparent', borderColor: 'white' }}>
            <div className="circle-image" style={{ marginTop: "20px" }}>
              <Card.Img src={developer.photoUrl} />
            </div>

            <Card.Body>
              <Card.Title style={{ color: 'white' }}>{developer.name}</Card.Title>
              <Card.Subtitle className="mb-2" style={{ color: 'white' }}>
                {developer.department}
              </Card.Subtitle>
              <div className='icons'>
                <a href={`mailto:${developer.email}`} target="_blank" rel="noopener noreferrer">
                  <AiFillMail />
                </a>
                <a href={developer.linkedin} target="_blank" rel="noopener noreferrer">
                  <FaLinkedinIn />
                </a>

                {developer.instagram && (
                  <a href={developer.instagram} target="_blank" rel="noopener noreferrer">
                    <AiFillInstagram />
                  </a>
                )}

                <a href={`tel:${developer.phone}`} style={{ textDecoration: 'none' }}>
                  <AiFillPhone />
                </a>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
};

export default Developers;