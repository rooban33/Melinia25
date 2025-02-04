import React from "react";
import "./Slide.css";

export const Slide = React.memo(function (StackedCarouselSlideProps) {
  const {
    data,
    dataIndex,
    isCenterSlide,
    swipeTo,
    slideIndex,
    onCardClick,
  } = StackedCarouselSlideProps;

  const coverImage = data[dataIndex].image;
  const text = data[dataIndex].text;
  const path = data[dataIndex].path;

  const handleClick = () => {
    if (!isCenterSlide) {
      swipeTo(slideIndex);
    } else if (onCardClick) {
      onCardClick(path);
    }
  };

  return (
    <div className="card-card" draggable={true} onClick={handleClick}>
      <div className={`cover fill ${isCenterSlide ? "off" : "on"}`}>
        <div className="card-overlay fill" />
      </div>
      <div className="detail fill">
        <div className="discription">
          <p className="event-name">{text}</p>
        </div>
        <img
          style={{ width: "100%", borderRadius: "10px" }}
          alt="cover"
          className="cover-image"
          src={coverImage}
        />
      </div>
    </div>
  );
});