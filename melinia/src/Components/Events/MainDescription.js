import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
// Import images for your cards
import { Bs1CircleFill, Bs2CircleFill, Bs3CircleFill, BsPeopleFill } from "react-icons/bs";
import { IoLocation } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { Particle } from '../ParticlesBackground';
import mixpanel from 'mixpanel-browser';
import './Main.css';
import Button from "@mui/material/Button";
import { FaArrowRight } from "react-icons/fa";

import Keycharades from "../../Assets/events/KEY CHARADES.png"
import SEQUELVERSE from "../../Assets/events/SEQUELVERSE.png"
import bidbattle from "../../Assets/events/bidbattle.png"
import codegolf from "../../Assets/events/code golf.png"
import crypticquest from "../../Assets/events/datacra.jpeg"
import datacraft from "../../Assets/events/data craft.png"
import somethingfishy from "../../Assets/events/something fishy.png"
import { Container } from 'react-bootstrap';


const cardData = [
  {
    id: 1,
    imageUrl: Keycharades,
    title: 'Key Charades',
    description: 'In this event, each participant will receive encrypted messages and a flowchart. One person will act out a keyword, and the rest of the group must figure it out. Once the keyword is discovered, use it to decode your messages using the provided flowchart. The decoded messages will reveal a riddle that the entire group will work together to solve. It\'s a fun and collaborative challenge that combines acting, code-breaking, and riddle-solving.',
    round1: {
      title: "Word Enactment",
      detail: <>1. Each team will be assigned a programming-related word.<br></br>2.	Without speaking or using any props, the participant must act out the word for others to guess.<br></br>3. The rest of the team members will observe and try to guess the word being enacted.<br></br>4. The participant can use gestures, body language, and actions to convey the essence of the word.<br></br>5. The participant will have a limited time (e.g., 60 seconds) to enact the word.<br></br>6. Once the time is up or the word is correctly guessed, the next participant will move on to the second round.</>
    },
    round2: {
      title: "Decoding Encrypted Words ",
      detail: <>1. Each team will be provided with an encrypted word and the algorithm used for encryption.<br></br>2. Participants must decipher the encrypted word using the given algorithm.<br></br>3. Participants can use any language to decode the encrypted word in the given specific platform.<br></br>4. Once decoded, participants should write down or announce the decrypted word.<br></br>5. The correct decrypted word will be revealed by the event organizer.<br></br>6. Participants will earn points or rewards based on the accuracy and speed of decryption.</>
    },

    rules: "Students are requested to bring their own laptops with stable internet connection",
    venue: "CM - 306",
    // note: " Land of the Dead, where cre . Winners will be selected based on their results and the time taken to complete the challenge.  4. A brief explanation of the language will be given to the participants for better understanding.",
    teamsize: 3,
    coordinators: [{ name: "Navika ", Num: "9499006602" }, { name: "Susma ", Num: "9843736523" }],
    date: '2024-02-16',
    time: '10:00 AM - 1.30 PM',
    technical: true,
  },

  {
    id: 2,
    imageUrl: SEQUELVERSE,
    title: 'Sequel Verse',
    description: 'SequelVerse is an event where participants form pairs or participate individually. The first round involves an online MCQ quiz in the Quizizz platform. The second round is taken in Hackerrank platform where students solve and write queries. The participants are shortlisted after the first and second round based on their scores. The third round is also taken in Hackerrank. The participants will be given complex word problems to solve.',
    round1: {
      title: "MCQ",
      detail: "Participants will have to solve a set of MCQs in Quizizz platform (10 minutes)"
    },
    round2: {
      title: "SQL Queries",
      detail: "This round will intermediate level SQL queries in Hackerrank (10 minutes)"
    },
    round3: {
      title: "Complex SQL Problems",
      detail: "This round will have complex SQL word problems in Hackerrank (20-25 minutes)"
    },
    rules: "Students are requested to bring their own laptops with stable internet connection",
    venue: "CM - 301",
    teamsize: "1/2",
    coordinators: [{ name: "Dharshini ", Num: "6374698514" }, { name: "Abirami ", Num: "9003764378" }],
    date: '2024-02-16',
    time: '10:00 AM - 1.30 PM',
    technical: true,
  },

  {
    id: 3,
    imageUrl: codegolf,
    title: 'Code Golf',
    description: 'Dive into the coding arena with our thrilling 3-round challenge! Unleash your programming prowess under the pressure of time constraints and elevate your skills to conquer the coding battleground. Are you ready to code against the clock and emerge victorious?',
    round1: {
      title: "MCQ",
      detail: "The round will be for 25 minutes.The participants will have to solve 15 MCQ's. 10 Teams with high scores will be eligible for the next round"
    },
    round2: {
      title: "Easy Coding",
      detail: "The participants should solve 3 coding questions (Easy-Med Level) in 1 hour. Top 5 teams will be eligible for the final round  "
    },
    round3: {
      title: "Complex Coding",
      detail: "The participants should solve 2 coding questions (Med-High Level) in 45 minutes. The round ends with a 10-Minute Rapid fire session."
    },

    rules: "Students are requested to bring their own laptops with stable internet connection",
    venue: "CM -103",
    teamsize: 2,
    coordinators: [{ name: "Janumathi", Num: "9360638869" }, { name: "Prakalya ", Num: "9488038087" }],
    date: '2024-02-16',
    time: '10:00 AM - 1.30 PM',
    technical: true,
  },

  {
    id: 4,
    imageUrl: bidbattle,
    title: 'Bid Battle',
    description: 'Engage in strategic bidding and coding prowess in our event, where teams vie for questions, place their bids, and endeavor to conquer challenges.Take risk and score big by answering right in this thrilling Bid and Code showdown.',
    round1: {
      title: "Prelims",
      detail: <>1. Each team will have a purse of 1000 points<br></br>2. No of Questions-10-12<br></br>3. Bidding Value<br></br>4. Easy Question – 100 points<br></br>5. Difficult Question – 50 points<br></br>6. Marquee Question - +250 points if correct else -250 points<br></br>7. Top 9 teams with highest remaining purse will qualify to the finals <br></br>8. Teams will incur a deduction of points equal to their bid in the event of an incorrect answer</>
    },
    round2: {
      title: "Finale",
      detail: (
        <>
          1. Top 9 teams will participate in the finals<br />
          2. No of Questions-15<br />
          3. Each team will have a purse of 1500 points<br />
          4. Bidding Value<br />
          5. Easy Question – 100 points<br />
          6. Difficult Question – 50 points<br />
          7. Marquee Question - +250 points if correct else -250 points<br />
          8. Top 3 teams with the highest remaining purse will be the winners<br></br>
          9. Teams will incur a deduction of points equal to their bid in the event of an incorrect answer
        </>
      ),
    },

    // rules: "Students are requested to bring their own laptops with stable internet connection",
    venue: "CM -104",
    teamsize: 2,
    coordinators: [{ name: "Chanakkya", Num: "9500924924" }, { name: "Prakalya", Num: "9488038087" }],
    date: '2024-02-16',
    time: '10:00 AM - 1.30 PM',
    technical: false,
  },

  {
    id: 5,
    imageUrl: crypticquest,
    title: 'Cryptic Quest',
    description: ' "Cryptic Quest" - an adventure hunt where movie themed codes protecting treasures. Solve the codes inspired by films to find the path to mysteries. As you go further, the challenges get bigger, leading to the next level of  code challenge. Use your coding skills ,movie knowledge, crack the codes, and grab the treasures – "Cryptic quest" offers a fun journey for everyone!',
    round1: {
      title: "Code and hunt",
      detail: "Teams solve coding questions to obtain clues. Clues guide them to            locations with hints for the next coding challenge. Top 10 teams that emerge            with the final set of clues will advance to the final round."
    },
    round2: {
      title: "Coding",
      detail: "Participants will be presented with a programming challenge to solve within            the designated time frame. A set of guidelines will be provided to assist in            problem-solving. The top three teams will be determined based on the speed            at which they complete the task."
    },
    rules: "Students are requested to bring their own laptops with stable internet connection",
    venue: "CM - 204",
    teamsize: 3,
    coordinators: [{ name: "Ranjith ", Num: "9384360375" }, { name: "Bhupesh", Num: "9994615335" }],
    date: '2024-02-16',
    time: '10:00 AM - 1.30 PM',
    technical: true,
  },

  {
    id: 6,
    imageUrl: datacraft,
    title: 'Data Craft',
    description: 'A trailer for internships and placements, offering a glimpse into a future where data isn\'t just analyzed; it\'s a dynamic force shaping careers. Witness the crafting of raw data into a beautiful sculpture with expert data cleaning, preprocessing, and exploratory data analysis. Marvel at the precision of model building and the dance of evaluation metrics. After a refreshing intermission, experience the art of using Dash to make life simpler, showcasing stylish and interactive data visualizations. Join us for a journey of insights, innovation, and boundless opportunities!',
    round1: {
      title: "Data Analysis",
      detail: "The first round of the event would be held in two batches, each with 20 to 30 participants. Each batch has 40 minutes to finish the first round.  Participants can be in a team of two or one. The teams with the first high scores from each batch will be moved to the second round "
    },
    round2: {
      title: "Dashboard creation ",
      detail: "The second round will have 6 participants(team). This will be the final round deciding the winner of the event."
    },
    rules: "Students are requested to bring their own laptops with stable internet connection",
    venue: "CM - 105",
    teamsize: 2,
    coordinators: [{ name: "Avudaiappan ", Num: "9361259521" }, { name: "Bhupesh ", Num: "9994615335" }],
    date: '2024-02-16',
    time: '10:00 AM - 1.30 PM',
    technical: true,
  },

  {
    id: 7,
    imageUrl: somethingfishy,
    title: 'Something Fishy',
    description: 'Fact vs Fiction & Prompt Powerplay" beckons participants into a dual challenge of discerning truth from deception and unleashing creativity. Engage in an event where mysteries unfold and imaginations run wild!',
    round1: {
      title: "Same Same but Diffelant",
      detail: "Teams will be provided with a website for generating AI images, along with a specific theme. Each team, composed of up to 2 members, is required to use their creativity to produce one image aligning with the given theme. The best image, judged based on uniqueness and adherence to the theme, will receive a prize"
    },
    round2: {
      title: "Prompt Play",
      detail: "Teams will be provided with a website for generating AI images, along with a specific theme. Each team, composed of up to 2 members, is required to use their creativity to produce one image aligning with the given theme. The best image, judged based on uniqueness and adherence to the theme, will receive a prize."
    },
    rules: "Students are requested  bring their own laptops with stable internet connection",
    venue: "CM -302",
    teamsize: 2,
    coordinators: [{ name: "Priya Darshini ", Num: "9786233864" }, { name: "Abirami ", Num: "9003764378" }],
    date: '2024-02-16',
    time: '10:00 AM - 1.30 PM',
    technical: false,
  },

]


const MainDescription = () => {
  const { id } = useParams();
  const eventId = parseInt(id, 10); // Convert id to integer if it's stored as a string
  const event = cardData.find((event) => event.id === eventId);
  const handleLinkClick = (cardId) => {
    if (cardId === 1) {
      console.log('going');
      mixpanel.track("keycharades event register clicked", {
        page: "events"
      });
    }
    else if (cardId === 2) {
      mixpanel.track("sequelverse event register clicked", {
        page: "events"
      });
    }
    else if (cardId === 3) {
      mixpanel.track("codegolf event register clicked", {
        page: "events"
      });
    }
    else if (cardId === 4) {
      mixpanel.track("bidbattle event register clicked", {
        page: "events"
      });
    }
    else if (cardId === 5) {
      mixpanel.track("crypticquest event register clicked", {
        page: "events"
      });
    }
    else if (cardId === 6) {
      mixpanel.track("datacraft event register clicked", {
        page: "events"
      });
    }
    else if (cardId === 7) {
      mixpanel.track("somethingfishy event register clicked", {
        page: "events"
      });
    }
    // You can call your custom function or perform any other actions here
  };
  if (!event) {
    return <div>Error: Event not found</div>;
  }

  const { title, description, round1, round2, round3, rules, venue, note, teamsize, coordinators, date, time, technical } = event;

  return (
    <div className="main-wrapper" style={{ backgroundColor: "#d9d2e9" }}>
      <Container className="text-black" style={{ marginTop: "100px", padding: '30px' }}>
        <Particle style={{ zIndex: 0 }}></Particle>
        <div className='title'>
          <h3 className=" aboutFont text-lg">{title}</h3>
        </div>
        <div style={{ padding: "10px", display: "inline-block", background: "rgba(64, 25, 80, 0.7)", borderRadius: "5px", color: "white", margin: "20px", textAlign: "center" }}>
          {technical ? "Technical Event" : "Non - Technical Event"}
        </div>

        <div className='description text-md text-lg' style={{ textAlign: "justify", marginBottom: "40px" }}>
          {description}
        </div>

        <div className='info-event row d-flex flex-row justify-content-center' style={{ marginBottom: "40px", alignContent: "center" }}>
          <div className='venue col-md-4'>
            <div className='icon-container'>
              <IoLocation style={{ fontSize: "20px" }} />
            </div>
            <p className='info-detail text-md text-lg' style={{ fontSize: '20px', marginLeft: '10px', alignSelf: 'center' }}>{venue}</p>
          </div>

          <div className='time col-md-4'>
            <div className='icon-container'>
              <MdOutlineAccessTimeFilled style={{ fontSize: "20px" }} />
            </div>
            <p className='info-detail text-md text-lg' style={{ fontSize: '20px', marginLeft: '10px', alignSelf: 'center' }}> {time}</p>
          </div>

          <div className='teamsize col-md-4'>
            <div className='icon-container'>
              <BsPeopleFill style={{ fontSize: "20px" }} />
            </div>
            <p className='info-detail text-md text-lg' style={{ fontSize: '20px', marginLeft: '10px', alignSelf: 'center' }}>{teamsize}</p>
          </div>
        </div>



        <hr className='divider' />

        {/* <h3 className="text-lg subHead"  >Rounds</h3> */}
        <div className='round-rules' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 0 }}>
          <div className='rounds'>

            <div className='round1' style={{ margin: "10px" }}>
              <div className='element-2' style={{ marginBottom: "20px" }}>
                <Bs1CircleFill style={{ fontSize: '25px' }} />
                <h3 className="text-md text-lg title" style={{ fontSize: "20px", textAlign: "left" }}>{round1.title}</h3>
              </div>
              <div className='element-3'>
                <p className="text-md text-lg">{round1.detail}</p>
              </div>
            </div>

            <div className='round2' style={{ margin: "10px" }}>
              <div className='element-2' style={{ marginBottom: "20px" }}>
                <Bs2CircleFill style={{ fontSize: '25px' }} />
                <h3 className="text-md text-lg title" style={{ fontSize: "20px", textAlign: "left" }}>{round2.title}</h3>
              </div>
              <div className='element-3'>
                <p className="text-md text-lg">{round2.detail}</p>
              </div>
            </div>

            {round3 && (
              <div className='round3' style={{ flex: "1 1 300px", margin: "10px" }}>
                <div className='element-2' style={{ marginBottom: "20px" }}>
                  <Bs3CircleFill style={{ fontSize: '25px' }} />
                  <h3 className="text-md text-lg title" style={{ fontSize: "20px", textAlign: "left" }}>{round3.title}</h3>
                </div>
                <div className='element-3'>
                  <p className="text-md text-lg">{round3.detail}</p>
                </div>
              </div>
            )}
          </div>
        </div>


        {rules && (
          <>
        <hr className='divider' />


          <div className='rules '>
            <h3 className="text-lg guideline" >Guidelines</h3>
            <p className='element-3 text-md text-lg' style={{ textAlign: "center" }}>{rules}</p>
          </div>
          </>

        )}
        <hr className='divider' />

        <h3 className="text-lg">Coordinators</h3>

        <div className='column' style={{ display: "flex", flexDirection: "row", justifyContent: "center", gap: "2rem" }}>

          <div className='coord1' style={{ display: "flex", flexDirection: "row", margin: "20px 0", justifyContent: "center", alignItems: "center" }}>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
              <div style={{ display: "flex", flexDirection: "column", marginRight: "30px" }}>
                <div className="text-md" style={{ fontSize: "20px" }}>{coordinators[0].name}</div>
                <div className="text-md">{coordinators[0].Num}</div>
              </div>
              <div>
                <a href={`https://wa.me/${coordinators[0].Num}`} target="_blank" rel="noopener noreferrer"  style={{ cursor: "pointer",position:"relative" }}>
                  <FaWhatsapp style={{ fontSize: "30px", color: "green" }} />
                </a>
              </div>
            </div>
          </div>

          <div className='coord2' style={{ display: "flex", flexDirection: "row", margin: "20px 0", justifyContent: "center", alignItems: "center" }}>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
              <div style={{ display: "flex", flexDirection: "column", marginRight: "30px" }}>
                <div className="text-md" style={{ fontSize: "20px" }}>{coordinators[1].name}</div>
                <div className="text-md">{coordinators[1].Num}</div>
              </div>
              <div>
                <a href={`https://wa.me/${coordinators[1].Num}`} target="_blank" rel="noopener noreferrer"  style={{ cursor: "pointer", position:"relative" }}>
                  <FaWhatsapp style={{ fontSize: "30px", color: "green" }}/>
                </a>
              </div>
            </div>
          </div>
        </div>

        <Button className="buttonFont" style={{ backgroundColor: '#61016e' }} variant="contained" >
          <a href='https://docs.google.com/forms/d/e/1FAIpQLSeNh2Ouo9eoOSXaeQmVFUQahUHBQuYW8X5TdTUFBRecjgbFeQ/viewform?usp=sf_link' style={{ textDecoration: "none", color: "white", width: "50% !important" }}
            target="_blank"
          >
            Register
          </a>
          <FaArrowRight style={{ marginLeft: '3px' }} /></Button>
      </Container>
    </div>

  )
};

export default MainDescription;
