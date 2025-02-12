import React from 'react';
import './Timeline.css';
import launch from '../../Assets/timeline/start.png';
import event from '../../Assets/timeline/event.png';
import dance from '../../Assets/timeline/dance.png';
import valediction from '../../Assets/timeline/valediction.png';
import lunch from '../../Assets/timeline/lunch.png';
import finals from '../../Assets/timeline/finals.png';
import { motion } from 'framer-motion';

const events = [
  { time: '09:00 AM - 09:45 AM', title: 'Inauguration Ceremony', img: launch },
  { time: '10:00 AM - 01:30 PM', title: 'Technical & Non-Technical Events', img: event },
  { time: '01:30 PM - 02:00 PM', title: 'Lunch Break', img: lunch },
  { time: '02:00 PM - 03:00 PM', title: 'Finale', img: finals },
  { time: '04:00 PM - 05:30 PM', title: 'Valediction Ceremony', img: valediction }
];

function Timeline() {
  return (
    <div className="timeline-container">
      <h2 className="timeline-heading ds-digib-text">General Timeline </h2>
      <div className="timeline">
        {events.map((event, index) => (
          <motion.div
            key={index}
            className={`timeline-box ${index % 2 === 0 ? 'left' : 'right'}`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.3 }}
          >
            <img src={event.img} alt={event.title} className="timeline-icon" />
            <div className="timeline-info">
              <h6>{event.time}</h6>
              <p style={{ color: "white" }}>{event.title}</p>
            </div>
          </motion.div>
        ))}
        <div className="vertical-line"></div>
      </div>
    </div>
  );
}

export default Timeline;
