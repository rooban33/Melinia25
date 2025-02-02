import React, { useEffect, useState } from "react";
import { StackedCarousel, ResponsiveContainer } from "react-stacked-center-carousel";
import "./Slide.css";
import { Slide } from "./Slide";
import Keycharades from '../../Assets/events/KEY CHARADES.png';
import bidbattle from '../../Assets/events/bidbattle.png';
import codegolf from '../../Assets/events/code golf.png';
import datacra from '../../Assets/events/datacra.jpeg';
import hackathon from '../../Assets/events/hackATHON.png';
import Paperpresentation from '../../Assets/events/Paper presentation.png';
import sequelverse from '../../Assets/events/SEQUELVERSE.png';
import somethingfishy from '../../Assets/events/something fishy.png';
import { useNavigate } from "react-router-dom";
const data = [
  { image: Keycharades, text: "Keycharades" },
  { image: bidbattle, text: "Bid Battle" },
  { image: codegolf, text: "Code Golf" },
  { image: datacra, text: "Datacra" },
  { image: hackathon, text: "hackATHON" },
  { image: Paperpresentation, text: "Paper Presentation" },
  { image: sequelverse, text: "sequelverse" },
  { image: somethingfishy, text: "something fishy" },
];

const CardExample = () => {
  const ref = React.useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();
  // Automatically move to the next slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      ref.current?.goNext();
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  // Update the current index when the slide changes
  const handleSlideChange = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="card">
      <div style={{ width: "100%", position: "relative" }}>
        <ResponsiveContainer
          carouselRef={ref}
          render={(width, carouselRef) => (
            <StackedCarousel
              ref={carouselRef}
              slideComponent={Slide}
              slideWidth={450}
              carouselWidth={width}
              data={data}
              maxVisibleSlide={5}
              disableSwipe
              customScales={[1, 0.85, 0.7, 0.55]}
              transitionTime={450}
              onActiveSlideChange={handleSlideChange} // Track active slide
            />
          )}
        />

        {/* Left Arrow Button */}
        <div
          className="card-button left"
          onClick={() => ref.current?.goBack()}
        >
        </div>

        {/* Right Arrow Button */}
        <div
          className="card-button right"
          onClick={() => ref.current?.goNext()}
        >
        </div>

        {/* Indicators */}
        <div className="indicators">
          {data.map((_, index) => (
            <div
              key={index}
              className={`indicator ${currentIndex === index ? "active" : ""}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardExample;
