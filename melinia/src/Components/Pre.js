import React from "react";
import "./Pre.css"; // Ensure this file contains the provided CSS

const Pre = ({ load }) => {
  if (!load) return null;
  
  return (
    <div className="loader-overlay">
      <div className="loader-container">
        <div className="loader">
          <svg viewBox="0 0 80 80">
            <circle r="32" cy="40" cx="40"></circle>
          </svg>
        </div>
        
        <div className="loader triangle">
          <svg viewBox="0 0 86 80">
            <polygon points="43 8 79 72 7 72"></polygon>
          </svg>
        </div>
        
        <div className="loader">
          <svg viewBox="0 0 80 80">
            <rect height="64" width="64" y="8" x="8"></rect>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Pre;