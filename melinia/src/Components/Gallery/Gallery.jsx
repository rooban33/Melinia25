import InfiniteMenu from './InfiniteMenu'

const Gallery = () => {
    
    const items = [
        {
          image: 'https://picsum.photos/300/300?grayscale',
          link: 'https://google.com/',
          title: 'Item 1',
          description: 'This is pretty cool, right?'
        },
        {
          image: 'https://picsum.photos/400/400?grayscale',
          link: 'https://google.com/',
          title: 'Item 2',
          description: 'This is pretty cool, right?'
        },
        {
          image: 'https://picsum.photos/500/500?grayscale',
          link: 'https://google.com/',
          title: 'Item 3',
          description: 'This is pretty cool, right?'
        },
        {
          image: 'https://picsum.photos/600/600?grayscale',
          link: 'https://google.com/',
          title: 'Item 4',
          description: 'This is pretty cool, right?'
        }
      ];
      
  
    return (
    <div style={{ height: '600px', position: 'relative' }}>
    <InfiniteMenu items={items}/>
    </div>
    );
  }
  
  export default Gallery;