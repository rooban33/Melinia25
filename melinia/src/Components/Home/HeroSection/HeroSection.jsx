import React from "react";
import { motion } from "framer-motion";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="hero-container">
      {/* Background Animation */}
      <div className="squid-bg"></div>

      {/* Hero Card */}
      <div className="hero-card">
        <motion.h1 
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, ease: "easeOut" }} 
          className="hero-heading"
        >
          Coimbatore Institute of Technology
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: -30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="hero-subheading"
        >
          Department of Computing <br /> MSc SS | DS | DCS | AIML
        </motion.h2>

        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          className="hero-title"
        >
          mElinia <span className="squid-highlight">2K25</span>
        </motion.h1>
        
        {/* Shapes */}
        <div className="squid-shapes">
          <span className="circle">○</span>
          <span className="triangle">△</span>
          <span className="square">□</span>
        </div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.7 }}
          className="hero-tagline"
        >
          National Level Technical Symposium
        </motion.p>

        {/* Call-to-Action Button */}
        <motion.button 
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 1, ease: "easeOut", delay: 1 }}
          className="squid-button"
        >
           Register Now
        </motion.button>
      </div>
    </div>
  );
};

export default HeroSection;
