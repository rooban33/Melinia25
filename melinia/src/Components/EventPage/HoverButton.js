import React from "react";

const HoverButton = ({ text, onClick, isActive }) => {
  return (
    <button
      className={`hover-btn ${isActive ? "active" : ""}`}
      onClick={onClick}
    >
      {text}
      <style jsx>{`
        .hover-btn {
          width: clamp(8em, 15vw, 12em); /* Scales based on viewport */
          height: clamp(3em, 5vw, 3.5em);
          position: relative;
          border: 3px ridge #f33a6a; /* Squid Game pink */
          outline: none;
          background-color: transparent;
          color: white;
          transition: 0.5s;
          border-radius: 0.3em;
          font-size: clamp(14px, 1.2vw, 16px); /* Scales with screen */
          font-weight: bold;
          cursor: pointer;
        }

        .hover-btn::after,
        .hover-btn::before {
          content: "";
          position: absolute;
          width: 95%;
          height: 40%;
          background-color: black;
          transition: 0.5s;
          transform-origin: center;
        }

        .hover-btn::after {
          top: -10px;
          left: 3%;
        }

        .hover-btn::before {
          top: 80%;
          left: 3%;
        }

        .hover-btn:hover::before,
        .hover-btn:hover::after {
          transform: scale(0);
        }

        .hover-btn:hover {
          box-shadow: inset 0px 0px 25px #f76b8a;
        }

        .hover-btn.active {
          box-shadow: none;
        }

        .hover-btn.active::before,
        .hover-btn.active::after {
          transform: scale(0);
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .hover-btn {
            width: 90%;
            font-size: 14px;
            height: 3em;
          }
        }

        @media (max-width: 480px) {
          .hover-btn {
            width: 110%;
            font-size: 12px;
            height: 2.8em;
            padding:2px;
          }
        }
      `}</style>
    </button>
  );
};

export default HoverButton;
