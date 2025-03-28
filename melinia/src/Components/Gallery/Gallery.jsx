import InfiniteMenu from './InfiniteMenu';
import img1 from '../../Assets/gallery/start.png';
import img2 from '../../Assets/gallery/stco.JPG';
import img3 from '../../Assets/gallery/win.JPG';
import img4 from '../../Assets/gallery/preparty.JPG?cachebust=1';
import img5 from '../../Assets/gallery/inaguration.JPG';
import img6 from '../../Assets/gallery/chief.JPG';
import img7 from '../../Assets/gallery/mr.JPG';
import img8 from '../../Assets/gallery/tech.jpeg';
import img9 from '../../Assets/gallery/music.JPG';
import img10 from '../../Assets/gallery/audiance.JPG?cachebust=1';
import img11 from '../../Assets/gallery/reveal.JPG?cachebust=1';
import img12 from '../../Assets/gallery/team.JPG?cachebust=1';
import img13 from '../../Assets/gallery/sports.jpeg';


const Gallery = () => {
    
    const items = [
        {
          image: img2,
          link: 'https://google.com/',
          title: "Melinia'25",
          description: "Flagship Events"
        },
        {
          image: img3,
          link: 'https://google.com/',
          title: "Melinia'25",
          description: "Overall trophy winners"
        },
        {
          image: img1,
          title: "Welcome to",
          link: 'https://google.com/',
          description: "Try rotating the globe 🌍🖐"
        },
        {
          image: img4,
          link: 'https://google.com/',
          title: "Melinia'25",
          description: 'Flash Mob by Students'
        },
        {
          image: img5,
          link: 'https://google.com/',
          title: "Melinia'25",
          description: 'Inaguration Ceremony'
        },
        {
          image: img6,
          link: 'https://google.com/',
          title: "Melinia'25",
          description: 'Chief Guest Addressing'
        },
        {
          image: img7,
          title: "Melinia'25",
          link: 'https://google.com/',
          description: "Mr. Melinia 2025"
        },
        {
          image: img8,
          title: "Melinia'25",
          link: 'https://google.com/',
          description: "Technical Event"
        },
        {
          image: img9,
          link: 'https://google.com/',
          title: "Melinia'25",
          description: "Cultural Performance"
        },
        {
          image: img10,
          link: 'https://google.com/',
          title: "Melinia'25",
          description: "Faculty at Valediction"
        },
        {
          image: img11,
          link: 'https://google.com/',
          title: "Melinia'25",
          description: "Trophy Unveiling"
        },
        {
          image: img12,
          link: 'https://google.com/',
          title: "Melinia'25",
          description: "The Team Behind"
        },
        {
          image: img13,
          link: 'https://google.com/',
          title: "Melinia'25",
          description: "Basketball Tournament"
        },
      ];

      
  
    return (
    <div style={{ height: '600px', position: 'relative' }}>
    <InfiniteMenu items={items}/>
    </div>
    );
  }
  
  export default Gallery;