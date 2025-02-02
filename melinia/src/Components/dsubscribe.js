import React from 'react';

const HoverButton = () => {
    return (
        <button className="hover-btn">
            Hover me
            <style jsx>{`
        .hover-btn {
          width: 10em;
          position: relative;
          height: 3.5em;
          border: 3px ridge #149cea;
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
          background-color: #212121;
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
          background-color: #212121;
          transition: 0.5s;
        }

        .hover-btn:hover::before,
        .hover-btn:hover::after {
          transform: scale(0);
        }

        .hover-btn:hover {
          box-shadow: inset 0px 0px 25px #1479ea;
        }
      `}</style>
        </button>
    );
};

export default HoverButton;
