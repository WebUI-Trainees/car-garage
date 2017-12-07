import React from 'react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import CarouselItem from './CarouselItem';

const SampleNextArrow = props => {
  const { className, onClick } = props;

  return <div className={className} onClick={onClick} />;
};

SampleNextArrow.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func
};

SampleNextArrow.defaultProps = {
  className: '',
  onClick: null
};

const SamplePrevArrow = props => {
  const { className, onClick } = props;

  return <div className={className} onClick={onClick} />;
};

SamplePrevArrow.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func
};

SamplePrevArrow.defaultProps = {
  className: '',
  onClick: null
};

const CarDesignCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow className="next-arrow" />,
    prevArrow: <SamplePrevArrow className="prev-arrow" />
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
