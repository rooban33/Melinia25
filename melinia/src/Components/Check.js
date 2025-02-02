import React from 'react';

const FilterButton = ({ text, onClick, isActive }) => {
    return (
        <div>
            <style>
                {`
          /* Apply a gaming-themed font like 'Press Start 2P' */
          @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

          /* Base button styling */
          .filter-button {
            font-family: 'Press Start 2P', cursive;
            font-size: 1.2em;
            text-transform: uppercase;
            letter-spacing: 2px;
            border: 3px solid transparent;
            border-radius: 8px;
            background-color: black;
            color: #f50057; /* Squid Game pink */
            position: relative;
            cursor: pointer;
            transition: all 0.3s ease;
            padding: 0.5rem 1.5rem;
          }

          /* Glowing outline effect */
          .filter-button:focus, .filter-button:hover {
            outline: none;
            border-color: #f50057; /* Squid Game pink */
            box-shadow: 0 0 10px 4px #f50057; /* Squid Game pink glow */
          }

          /* Styles when the button is active */
          .filter-button.active {
            background-color: #000;
            color: #f50057;  /* Squid Game pink */
            box-shadow: 0 0 10px 4px #f50057; /* Squid Game pink glow */
            transform: scale(1.05);
          }

          /* Styles for inactive buttons */
          .filter-button.inactive {
            background-color: black;
            color: #f50057; /* Squid Game pink */
            border-color: #f50057;
          }

          .filter-button.inactive:hover {
            background-color: #111;
            color: #f50057; /* Squid Game pink */
          }
        `}
            </style>
            <button
                className={`filter-button ${isActive ? "active" : "inactive"}`}
                onClick={onClick}
            >
                {text}
            </button>
        </div>
    );
};

export default FilterButton;
