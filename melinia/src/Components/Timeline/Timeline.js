// Timeline.js
import React from 'react';
import './Timeline.css';
import launch from '../../Assets/timeline/launch.png'
import event from '../../Assets/timeline/event.png'
import dance from '../../Assets/timeline/dance.png'
// import final from '../../Assets/timeline/final.jpg'
import valediction from '../../Assets/timeline/valediction.png'
import lunch from '../../Assets/timeline/lunch.png'
// import { color } from 'framer-motion';



function Timeline1() {
    return (
      
     
    <><div class="heading">Event Line-up</div>
    <div class="container-timeline">
 
    
      <div class="vertical-line"></div>
     
      <div class="box box-left">
      <img src={launch} alt="launch" class="launch"/>

          <div class="info">
            <h6>08.30 am - 09.30 am</h6>
            <p>
              Inaugration ceremony
            </p>

          </div>
        </div>
        <div class="box box-right">
          <img src={event} alt="event" class="event" />
          <div class="info">
            <h6>10.00 am - 01.30 pm</h6>
            <p>
              Technical and Non-Technical Events
            </p>
          </div>
        </div>
        <div class="box box-left">
          <img src={lunch} alt="lunch" class="lunch" />

        <div class="info">
        <h6>01.30 pm - 02.30 pm</h6>
          <p>
           Lunch Break
          </p>
        </div>
      </div>
      {/* <div class="box box-right">
      <img src={final} alt="final" class="final"/>
        <div class="info">
        <h6>02.30 pm - 03.30 pm</h6>
          <p>
           Final rounds for the events
          </p>
        </div>
      </div> */}
      <div class="box box-right">
      <img src={dance} alt="dance" class="dance"/>
        <div class="info">
        <h6>03.00 pm - 04.00 pm</h6>
          <p>
           Cultural fest
          </p>
        </div>
      </div>
      <div class="box box-left">
      <img src={valediction} alt="valediction" class="valediction"/>
        <div class="info">
        <h6>04.00 pm - 05.00 pm</h6>
          <p>
           Valediction ceremony
          </p>
        </div>
      </div>
    </div>
    </>
    );
}

export default Timeline1;