import React, { useState } from "react";
import { Button } from "@material-tailwind/react";
import TiltedCard from "./NewCard";
import "../style.css";
import events from "../Data/EventsInfo";
import FilterButton from "./Check";
import HoverButton from "./dsubscribe";
import CustomButton from "./backbutton";
const EventsPage = () => {
    const [activeCategory, setActiveCategory] = useState("Technical");

    const filteredEvents = events.filter((event) =>
        Array.isArray(event.category)
            ? event.category.includes(activeCategory)
            : event.category === activeCategory
    );

    return (
        <div className="min-h-screen px-4 sm:px-6 lg:px-8">
            <div className="fixed top-3 left-4 z-[1100]">
                <CustomButton />
            </div>
            {/* Buttons section */}
            <header className="w-full py-8 sm:py-12 lg:py-16">
                <nav className="flex flex-wrap justify-center gap-2 sm:gap-4">
                    {["Technical", "Non-Technical", "Flagship"].map((category) => (
                        <div key={category} className="w-auto">
                            <HoverButton
                                text={category}
                                onClick={() => setActiveCategory(category)}
                                isActive={activeCategory === category}
                            />
                        </div>
                    ))}
                </nav>
            </header>

            {/* Cards section */}
            <main className="w-full max-w-7xl mx-auto pb-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
                    {filteredEvents.map((event) => (
                        <div
                            key={event.id}
                            className="flex justify-center relative group"
                        >
                            {/* Glow effect */}
                            <div
                                className="absolute inset-0 rounded-lg bg-gradient-to-r custom-glow"
                                style={{
                                    backgroundColor: event.is_flagship ? "#FFD700" : "#F33A6A",
                                }}
                            />

                            {/* Card Container */}
                            <div className="relative w-full">
                                <TiltedCard
                                    is_flagship={event.is_flagship}
                                    eventId={event.id}
                                    imageSrc={event.image}
                                    altText={event.title}
                                    captionText={event.title}
                                    containerHeight="300px"
                                    containerWidth="100%"
                                    imageHeight="310px"
                                    imageWidth="100%"
                                    rotateAmplitude={8}
                                    scaleOnHover={1.08}
                                    showMobileWarning={false}
                                    showTooltip={true}
                                    displayOverlayContent={true}
                                    overlayContent={
                                        <div className="w-full">
                                            <p className="text-sm sm:text-base lg:text-lg text-white mb-4">
                                                {event.description}
                                            </p>
                                        </div>
                                    }
                                    buttonText="Learn More"
                                    dampeningFactor={0.5}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default EventsPage;