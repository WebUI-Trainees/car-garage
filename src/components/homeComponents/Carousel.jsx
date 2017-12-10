import React from 'react';
import Slider from 'react-slick';
import CarouselItem from './CarouselItem';

const CarDesignCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    accessibility: true,
    autoplay: true,
    autoplaySpeed: 5000
  };

  return (
    <Slider {...settings} className="design-carousel">
      <div>
        <CarouselItem />
      </div>
      <div>
        <CarouselItem />
      </div>
      <div>
        <CarouselItem />
      </div>
    </Slider>
  );
};

export default CarDesignCarousel;
