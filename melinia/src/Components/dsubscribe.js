import React from 'react';

const HoverButton = ({ text, onClick, isActive }) => {
  return (
    <button
      className={`hover-btn ${isActive ? 'active' : ''}`} // Add 'active' class if the button is active
      onClick={onClick}
    >
      {text}
      <style jsx>{`
        .hover-btn {
          width: 10em;
          position: relative;
          height: 3.5em;
          border: 3px ridge #F33A6A; // Border color - Squid Game pink
          outline: none;
          background-color: transparent;
          color: white;
          transition: 1s;
          border-radius: 0.3em;
          font-size: 16px;
          font-weight: bold;
          cursor: pointer;
        }

        .hover-btn::after {
          content: "";
          position: absolute;
          top: -10px;
          left: 3%;
          width: 95%;
          height: 40%;
          background-color: black; // Top glow - Black
          transition: 0.5s;
          transform-origin: center;
        }

        .hover-btn::before {
          content: "";
          transform-origin: center;
          position: absolute;
          top: 80%;
          left: 3%;
          width: 95%;
          height: 40%;
          background-color: black; // Bottom glow - Black
          transition: 0.5s;
        }

        .hover-btn:hover::before,
        .hover-btn:hover::after {
          transform: scale(0); // Remove the glow effect when hovered
        }

        .hover-btn:hover {
          box-shadow: inset 0px 0px 25px #F76B8A; // Hover effect - Lighter pink
        }

        // Remove hover effect for active state
        .hover-btn.active {
          box-shadow: none; // Remove box-shadow when button is active
        }

        .hover-btn.active::before,
        .hover-btn.active::after {
          transform: scale(0); // Remove top and bottom glow when button is active
        }
      `}</style>
    </button>
  );
};

export default HoverButton;
