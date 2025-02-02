import React, { useState } from "react";
import { Button } from "@material-tailwind/react";
import TiltedCard from "./NewCard"; // Import your new card component
import "../style.css";
import events from "../Data/EventsInfo";
import FilterButton from "./Check";
// Main Events Page Component
const EventsPage = () => {
    const [activeCategory, setActiveCategory] = useState("Technical");

    const filteredEvents = events.filter((event) =>
        Array.isArray(event.category) ? event.category.includes(activeCategory) : event.category === activeCategory
    );

    return (
        <div className="min-h-screen">
            {/* Buttons section */}
            <header className="w-full mb-20 mt-20">
                <nav className="flex justify-center gap-4 mt-8">

                    {["Technical", "Non-Technical", "Flagship"].map((category) => (
                        <FilterButton
                            key={category}
                            text={category}  // Pass category as text
                            onClick={() => setActiveCategory(category)} // Handle click event
                            isActive={activeCategory === category}  // Check if active category
                        />
                    ))}
                </nav>
            </header>

            {/* Cards section */}
            <main className="w-full px-30 mb-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-24 gap-x-0 justify-items-center">
                    {filteredEvents.map((event) => (
                        <div
                            key={event.id}
                            className="flex justify-center relative group"
                        >
                            {/* Glow effect */}
                            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#FF1199] to-[#11FFEE] custom-glow"></div>
                            {/* Card */}
                            <div className="relative">
                                <TiltedCard
                                    key={event.id}
                                    eventId={event.id}
                                    imageSrc={event.image}
                                    altText={event.title}
                                    captionText={event.title}
                                    containerHeight="400px"
                                    containerWidth="400px"
                                    imageHeight="400px"
                                    imageWidth="400px"
                                    rotateAmplitude={8}
                                    scaleOnHover={1.08}
                                    showMobileWarning={false}
                                    showTooltip={true}
                                    displayOverlayContent={true}
                                    overlayContent={
                                        <p className="text-center text-white">
                                            {event.description}
                                        </p>
                                    }
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
