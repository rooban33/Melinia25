import InfiniteMenu from './InfiniteMenu';
import img1 from '../../Assets/gallery/start.jpg';
import img2 from '../../Assets/gallery/stco.JPG';
import img3 from '../../Assets/gallery/win.JPG';
import img4 from '../../Assets/gallery/flashmob.jpg';
import img5 from '../../Assets/gallery/inaguration.JPG';
import img6 from '../../Assets/gallery/chief.JPG';
import img7 from '../../Assets/gallery/mr.JPG';
import img8 from '../../Assets/gallery/tech.JPG';

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
          image: img1,
          title: "Welcome to",
          link: 'https://google.com/',
          description: "Try rotating the globe 🌍🖐"
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
      ];

      
  
    return (
    <div style={{ height: '600px', position: 'relative' }}>
    <InfiniteMenu items={items}/>
    </div>
    );
  }
  
  export default Gallery;