import React from "react";
import "./PopUp.css";

const PopUp = ({ open, onClose, title, description }) => {
  if (!open) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2>{title}</h2>
        <p>{description}</p>
        <button onClick={onClose} className="popup-close-btn">Close</button>
      </div>
    </div>
  );
};

export default PopUp;
