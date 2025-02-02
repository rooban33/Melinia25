import React from 'react';
import './Timeline.css';
import launch from '../../Assets/timeline/launch.png';
import event from '../../Assets/timeline/event.png';
import dance from '../../Assets/timeline/dance.png';
import valediction from '../../Assets/timeline/valediction.png';
import lunch from '../../Assets/timeline/lunch.png';
import { motion } from 'framer-motion';

const events = [
  { time: '08.30 am - 09.30 am', title: 'Inauguration Ceremony', img: launch },
  { time: '10.00 am - 01.30 pm', title: 'Technical & Non-Technical Events', img: event },
  { time: '01.30 pm - 02.30 pm', title: 'Lunch Break', img: lunch },
  { time: '03.00 pm - 04.00 pm', title: 'Cultural Fest', img: dance },
  { time: '04.00 pm - 05.00 pm', title: 'Valediction Ceremony', img: valediction }
];

function Timeline() {
  return (
    <div className="timeline-container">
      <h2 className="timeline-heading">Event Line-up</h2>
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
              <p>{event.title}</p>
            </div>
          </motion.div>
        ))}
        <div className="vertical-line"></div>
      </div>
    </div>
  );
}

export default Timeline;
