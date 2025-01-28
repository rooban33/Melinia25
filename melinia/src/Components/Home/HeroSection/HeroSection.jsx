import React from 'react';
import SplashCursor from '../SplashCursor';

const HeroSection = ({ yearsImage, isEventCompleted }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' , width:"100%" }}>
      <h1 
        style={{ paddingBottom: 15, textAlign: 'center', fontFamily: "Audiowide", fontSize: "1.5em" }} 
        className="q"
      >
        Coimbatore Institute of Technology
      </h1>
      <h1 
        style={{ paddingBottom: 15, textAlign: 'center', fontFamily: "Audiowide", fontSize: "1.3em" }} 
        className="q"
      >
        Department of Computing <br /> MSc SS | DS | DCS | AIML
      </h1>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div className="rajdhaniFont">
          <span>Proudly Presents</span>
          <br />
        </div>
        <br />
        <br />
      </div>
      <h1 className="heading-name meliniaFont">
        MELINIA
        <strong className="main-name"> 2K24 </strong>
      </h1>
      <h1 
        style={{ paddingBottom: 15, textAlign: 'center' }} 
        className="heading"
      >
        National Level Technical Symposium <br /> <br />
      </h1>
      <div style={{ padding: 50, textAlign: "left" }}>
        {/* Additional content or components can go here */}
      </div>
    </div>
  );
};

export default HeroSection;
