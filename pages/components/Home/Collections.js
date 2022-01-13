import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Collection from './Collection';

const data = [
{
    title: 'Collection #1',
    image: '/opensea/collections/tabs-promocard.jpeg',
    id: 1,
    bgColor: 'bg-black'
},
{
    title: 'Collection #2',
    image: '/opensea/collections/alethea revenant.jpg',
    id: 2,
    bgColor: 'bg-pink-600'
},
{
    title: 'Collection #3',
    image: '/opensea/collections/vaks-promocard.jpeg',
    id: 3,
    bgColor: 'bg-'
}
];
const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1200 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1200, min: 900 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 900, min: 0 },
      items: 1
    }
  };
function Collections() {
    return (
        <div className="max-w-[600px] md:max-w-[1100px] lg:max-w-[1300px] xl:max-w-[1400px] mx-auto">
            <h1 className="text-center font-bold text-2xl">Our Collection</h1>
            <div className="mt-10">
                <Carousel
                  swipeable={false}
                  draggable={false}
                  showDots={false}
                  responsive={responsive}
                  ssr={true}
                  infinite={true}
                  autoPlay={true}
                  autoPlaySpeed={5000}
                  keyBoardControl={true}
                  customTransition="all .5"
                  transitionDuration={100}
                  containerClass="carousel-container"
                  removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
                  dotListClass="custom-dot-list-style"
                  itemClass="carousel-item-padding-40-px"
                >
            {data?.map(({title, image, id, bgColor}) => (
                <Collection title={title} image={image} id={id} bgColor={bgColor} key={id} />
            ))}
            </Carousel>
            </div>
        </div>
    )
}

export default Collections
