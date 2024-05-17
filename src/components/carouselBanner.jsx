import { Carousel } from "@material-tailwind/react";

export function CarouselBannerCustomNavigation({ images }) {
  return (
    <Carousel
      className="rounded-x"
      loop={true}
      autoplay={true}
      autoplayDelay={8000}
      navigation={() => (<div/>)}
      prevArrow={() => (<div/>)}
      nextArrow={() => (<div/>)}
    >
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          className="w-full h-full object-cover"
        />
      ))}
    </Carousel>
  );
}
