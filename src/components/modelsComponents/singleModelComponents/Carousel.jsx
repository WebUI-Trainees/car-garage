import React from 'react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import CarouselItem from './CarouselItem';

const SampleNextArrow = props => {
  const { className, style, onClick } = props;

  return <div className={className} style={{ ...style, display: 'block' }} onClick={onClick} />;
};

SampleNextArrow.propTypes = {
  className: PropTypes.string,
  style: PropTypes.shape,
  onClick: PropTypes.function
};

SampleNextArrow.defaultProps = {
  className: '',
  style: null,
  onClick: null
};

const SamplePrevArrow = props => {
  const { className, style, onClick } = props;

  return <div className={className} style={{ ...style, display: 'block' }} onClick={onClick} />;
};

SamplePrevArrow.propTypes = {
  className: PropTypes.string,
  style: PropTypes.shape,
  onClick: PropTypes.function
};

SamplePrevArrow.defaultProps = {
  className: '',
  style: {},
  onClick: null
};

const CarDesignCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  return (
    <Slider {...settings} className="design-carousel">
      <CarouselItem />
      <CarouselItem />
      <CarouselItem />
      <CarouselItem />
    </Slider>
  );
};

export default CarDesignCarousel;
