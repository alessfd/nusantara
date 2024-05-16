import { Carousel } from '@material-tailwind/react';
import CarouselDotsNavigation from './CarouselDotsNavigation';

const CarouselComponent = ({ images }) => (
  <Carousel className="rounded-xl" navigation={CarouselDotsNavigation}>
    {images.map((image, index) => (
      <img
        key={index}
        src={image.src}
        className="h-full w-full object-cover"
      />
    ))}
  </Carousel>
);

export default CarouselComponent;