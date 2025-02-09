import InfiniteMenu from './InfiniteMenu';
import img1 from '../../Assets/gallery/start.jpg';
import img2 from '../../Assets/gallery/stco.JPG';
import img3 from '../../Assets/gallery/win.JPG';
import img4 from '../../Assets/gallery/flashmob.jpg';
import img5 from '../../Assets/gallery/inaguration.JPG';
import img6 from '../../Assets/gallery/chief.JPG';
import img7 from '../../Assets/gallery/mr.JPG';

const Gallery = () => {
    
    const items = [
      {
        image: img1,
        title: "Welcome to",
        link: 'https://google.com/',
        description: "Try rotating the globe 🌍🖐"
      },
        {
          image: img2,
          link: 'https://google.com/',
          title: "Melinia'24",
          description: "Melinia'24 Student Coordinators"
        },
        {
          image: img3,
          link: 'https://google.com/',
          title: "Melinia'24",
          description: "Overall trophy winners of Melinia'24"
        },
        {
          image: img4,
          link: 'https://google.com/',
          title: "Melinia'24",
          description: 'Students conducting Flash mob'
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
          description: 'Chief Guest addressing students'
        },
        {
          image: img7,
          title: "Melinia'24",
          link: 'https://google.com/',
          description: "Mr.Melinia of the year 2024"
        },
      ];

      
  
    return (
    <div style={{ height: '600px', position: 'relative' }}>
    <InfiniteMenu items={items}/>
    </div>
    );
  }
  
  export default Gallery;