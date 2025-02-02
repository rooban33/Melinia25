import { useParams, useNavigate } from "react-router-dom";
import React from "react";
import PixelCard from "./PixelCard";
import DecryptedText from "./DecryptedText";
import DetailCard from "./DetailCard";
import arrowIcon from "../Assets/icons/arrow_icon.png";
import goldTrophy from "../Assets/icons/gold_medal.png";
import silverTrophy from "../Assets/icons/silver_medal.png";
import callIcon from "../Assets/icons/call.png";
import events from "../Data/EventsInfo";
import { Button } from "@mui/material";
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
            <Button
                onClick={() => navigate(-1)}
                variant="text"
                className="text-black font-bold self-start"
            >
                ← Back
            </Button>
            {/* <div className="flex flex-col md:flex-row p-6 min-h-[calc(100vh-HeaderHeight-FooterHeight)] overflow-hidden"> */}
            <div className="flex flex-col md:flex-row p-6 min-h-screen overflow-hidden">

                {/* <div className="flex flex-col md:flex-row p-6 h-screen overflow-y-auto"> */}
                {/* Left Column - 40% Width, Normal Scrolling */}
                <div className="w-full md:w-2/5 flex justify-center p-12">
                    <PixelCard eventTitle={event.title} eventImage={event.image} />
                </div>

                {/* Right Column - 60% Width, Scrollable Event Details */}
                <div className="w-full md:w-3/5 p-6 bg-transparent text-left">
                    {/* Title */}
                    <DecryptedText
                        text={event.title}
                        animateOn="view"
                        revealDirection="center"
                        speed={180}
                        style={{
                            fontFamily: "Arial",
                            fontSize: "2rem",
                            fontWeight: "bold",
                            color: "#ff3860",
                            textShadow: "0 0 5px #ff3860, 0 0 10px #ff3860",
                            display: "flex",
                            justifyContent: "center"
                        }}
                    />

                    {/* Description */}
                    <DetailCard venue={event.venue} date="March 07, 2025" time={event.time} />
                    <h3 className="mt-6 text-lg font-semibold text-gray-900 ">Description:</h3>
                    <p className=" text-gray-700 ml-8">
                        {event.description}
                    </p>

                    {/* Rules */}
                    <h3 className="mt-6 text-lg font-semibold text-gray-900">Rules:</h3>
                    <ul className="list-none space-y-2 text-gray-700">
                        {event.rules.map((rule, index) => (
                            <li key={index} className="flex items-center">
                                <img src={arrowIcon} alt="icon" className="w-5 h-5 mr-2" />
                                {rule}
                            </li>
                        ))}
                    </ul>


                    {/* Prize Section */}
                    <h3 className="mt-6 text-lg font-semibold text-gray-900">Prize:</h3>
                    <div className="flex items-center space-x-6 text-gray-700 ml-4 ">
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
                    <h3 className="mt-6 text-lg font-semibold text-gray-900">Contact Info:</h3>
                    <div className="text-gray-700 ml-4">
                        {event.contact.map((person, index) => (
                            <div key={index} className="flex items-center mt-2">
                                <img src={callIcon} alt="Call Icon" className="w-6 h-6 mr-2" />
                                <span>{person}</span>
                            </div>
                        ))}
                    </div>
                    {/* Registration Button */}
                    <div className="mt-6 p-8">
                        <a href="/register" className="bg-red-600 text-white px-6 py-2 rounded-lg text-lg font-semibold hover:bg-red-700 transition">
                            Register Now
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventDetails;
