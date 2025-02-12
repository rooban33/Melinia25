import InfiniteMenu from './InfiniteMenu';
import img1 from '../../Assets/gallery/start.jpg';
import img2 from '../../Assets/gallery/stco.JPG';
import img3 from '../../Assets/gallery/win.JPG';
import img4 from '../../Assets/gallery/flashmob.jpg';
import img5 from '../../Assets/gallery/inaguration.JPG';
import img6 from '../../Assets/gallery/chief.JPG';
import img7 from '../../Assets/gallery/mr.JPG';
import img8 from '../../Assets/gallery/tech.JPG';
import img9 from '../../Assets/gallery/music.JPG';
import img10 from '../../Assets/gallery/audiance.JPG';
import img11 from '../../Assets/gallery/reveal.jpg';
import img12 from '../../Assets/gallery/team.JPG';
import img13 from '../../Assets/gallery/sports.jpeg';


const Gallery = () => {
    
    const items = [
        {
          image: img2,
          link: 'https://google.com/',
          title: "Melinia'24",
          description: "Student Coordinators"
        },
        {
          image: img3,
          link: 'https://google.com/',
          title: "Melinia'24",
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
          title: "Melinia'24",
          description: 'Flash Mob by Students'
        },
        {
          image: img5,
          link: 'https://google.com/',
          title: "Melinia'24",
          description: 'Inaguration Ceremony'
        },
        {
          image: img6,
          link: 'https://google.com/',
          title: "Melinia'24",
          description: 'Chief Guest Addressing'
        },
        {
          image: img7,
          title: "Melinia'24",
          link: 'https://google.com/',
          description: "Mr. Melinia 2024"
        },
        {
          image: img8,
          title: "Melinia'24",
          link: 'https://google.com/',
          description: "Technical Event"
        },
        {
          image: img9,
          link: 'https://google.com/',
          title: "Melinia'24",
          description: "Cultural Performance"
        },
        {
          image: img10,
          link: 'https://google.com/',
          title: "Melinia'24",
          description: "Faculty at Valediction"
        },
        {
          image: img11,
          link: 'https://google.com/',
          title: "Melinia'24",
          description: "Trophy Unveiling"
        },
        {
          image: img12,
          link: 'https://google.com/',
          title: "Melinia'24",
          description: "The Team Behind"
        },
        {
          image: img13,
          link: 'https://google.com/',
          title: "Melinia'24",
          description: "Cricket Tournament"
        },
      ];

      
  
    return (
    <div style={{ height: '600px', position: 'relative' }}>
    <InfiniteMenu items={items}/>
    </div>
    );
  }
  
  export default Gallery;