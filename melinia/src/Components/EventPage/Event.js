import { useParams, useNavigate } from "react-router-dom";
import React from "react";
import PixelCard from "./PixelCard";
import DecryptedText from "./DecryptedText";
import DetailCard from "./DetailCard";
import arrowIcon from "../../Assets/icons/arrow_icon.png";
import goldTrophy from "../../Assets/icons/gold_medal.png";
import silverTrophy from "../../Assets/icons/silver_medal.png";
import events from "../../Data/EventsInfo";
import { Button } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import RegisterButton from "./RegisterButton";
import CustomButton from "./backbutton";
import "./Event.css";
const EventDetails = () => {
    const { id } = useParams();
    console.log({ id });
    const navigate = useNavigate();
    const event = events.find((e) => e.id === parseInt(id));
    if (!event) {
        return <h1 className="text-center text-2xl font-bold">Event Not Found</h1>;
    }

    return (
        <div className="flex flex-col p-6 min-h-screen overflow-hidden mt-12">
            {/* Back button placed above the grid, left-aligned */}
            {/* <div className="flex flex-col md:flex-row p-6 min-h-[calc(100vh-HeaderHeight-FooterHeight)] overflow-hidden"> */}
            <div className="fixed top-3 left-4 z-[1100] back1">
                <CustomButton />
            </div>
            <div className="flex flex-col md:flex-row  min-h-screen overflow-hidden">

                {/* <div className="flex flex-col md:flex-row p-6 h-screen overflow-y-auto"> */}
                {/* Left Column - 40% Width, Normal Scrolling */}
                <div className="w-full md:w-2/5 flex justify-center p-12">
                    <PixelCard eventTitle={event.title} eventImage={event.image} className="ds-digib-text" />
                </div>

                {/* Right Column - 60% Width, Scrollable Event Details */}
                <div className="w-full md:w-3/5 p-2  bg-transparent text-left">
                    {/* Title */}
                    <DecryptedText
                        className="ds-digib-text"
                        encryptedClassName="ds-digib-text"
                        text={event.title}
                        animateOn="view"
                        revealDirection="center"
                        speed={180}
                        style={{
                            fontFamily: "Arial",
                            fontSize: "2rem",
                            fontWeight: "bold",
                            color: "#F33A6A",
                            // textShadow: "0 0 5px #ff3860, 0 0 10px #ff3860",
                            display: "flex",
                            justifyContent: "center"
                        }}
                    />

                    {/* Description */}
                    <div className="mt-16 flex justify-center">
                        <DetailCard venue={event.venue} date="March 07, 2025" time={event.time} />
                    </div>
                    <h3 className="mt-12 text-lg font-semibold " style={{color:"cornsilk"}}>Description:</h3>
                    <p className=" !text-white ml-8">
                        {event.description}
                    </p>

                    {/* Rules */}
                    <h3 className="mt-6 text-lg font-semibold" style={{color:"cornsilk"}}>Rules:</h3>
                    <ul className="list-none space-y-2 !text-white">
                        {event.rules.map((rule, index) => (
                            <li key={index} className="flex items-center">
                                <img src={arrowIcon} alt="icon" className="w-5 h-5 mr-2" />
                                {rule}
                            </li>
                        ))}
                    </ul>


                    {/* Prize Section */}
                    <h3 className="mt-6 text-lg font-semibold" style={{color:"cornsilk"}}>Prize:</h3>
                    <div className="flex items-center space-x-6 !text-white ml-4 ">
                        <div className="flex items-center">
                            <img src={goldTrophy} alt="Gold Trophy" className="w-8 h-8 mr-2" />
                            <span>1st Place: {event.prizes.first}</span>
                        </div>
                        <div className="flex items-center">
                            <img src={silverTrophy} alt="Silver Trophy" className="w-8 h-8 mr-2" />
                            <span>2nd Place: {event.prizes.second}</span>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <h3 className="mt-6 text-lg font-semibold" style={{color:"cornsilk"}}>Contact Info:</h3>
                    <div className="!text-white ml-4">
  {event.contact.map((person, index) => (
    <div key={index} className="flex items-center mt-2">
      <CallIcon className="text-[#F33A6A] mr-2" />
      <a href={`tel:${person.phone}`} className="text-white text-decoration-none">
        {person.name} - {person.phone}
      </a>
    </div>
  ))}
</div>


                    {/* Registration Button */}

                </div>
            </div>
            <div className="mt-6 p-8 flex justify-center">
                <RegisterButton />
            </div>
        </div >

    );
};

export default EventDetails;
