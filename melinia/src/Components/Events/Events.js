import React, { useEffect, useState } from "react";
import { StackedCarousel, ResponsiveContainer } from "react-stacked-center-carousel";
import { useNavigate } from "react-router-dom";
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

const data = [
  { image: Keycharades, text: "Keycharades", path: "/events/" },
  { image: bidbattle, text: "Bid Battle", path: "/events/" },
  { image: codegolf, text: "Code Golf", path: "/events/" },
  { image: datacra, text: "Datacra", path: "/events/" },
  { image: hackathon, text: "hackATHON", path: "/events/" },
  { image: Paperpresentation, text: "Paper Presentation", path: "/events/" },
  { image: sequelverse, text: "sequelverse", path: "/events/" },
  { image: somethingfishy, text: "something fishy", path: "/events/" },
];

const CardExample = () => {
  const navigate = useNavigate();
  const ref = React.useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      ref.current?.goNext();
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  const handleSlideChange = (index) => {
    setCurrentIndex(index);
  };

  const handleCardClick = (path) => {
    navigate(path);
  };

  const renderSlide = (props) => {
    return <Slide {...props} onCardClick={handleCardClick} />;
  };

  return (
    <div style={{placeItems:"center"}}>
      <div className="events">Events</div>
      <div className="card" >
        <div style={{ width: "100%", position: "relative" }}>
          <ResponsiveContainer
            carouselRef={ref}
            render={(width, carouselRef) => (
              <StackedCarousel
                ref={carouselRef}
                slideComponent={renderSlide}  
                slideWidth={450}
                carouselWidth={width}
                data={data}
                maxVisibleSlide={5}
                disableSwipe
                customScales={[1, 0.85, 0.7, 0.55]}
                transitionTime={450}
                onActiveSlideChange={handleSlideChange}
              />
            )}
          />

          <div
            className="card-button left"
            onClick={() => ref.current?.goBack()}
          >
          </div>

          <div
            className="card-button right"
            onClick={() => ref.current?.goNext()}
          >
          </div>

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
    </div>
  );
};

export default CardExample;