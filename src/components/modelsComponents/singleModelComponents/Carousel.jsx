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

const CarDesignCarousel = ({ carDetails }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow className="next-arrow" />,
    prevArrow: <SamplePrevArrow className="prev-arrow" />
  };

  const carouselContent = carDetails.map(carDetail => (
    <div key={carDetail.description}>
      <CarouselItem data={carDetail} />
    </div>
  ));

  return (
    <Slider {...settings} className="car-information">
      {carouselContent}
    </Slider>
  );
};

CarDesignCarousel.propTypes = {
  carDetails: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      text: PropTypes.string
    })
  ).isRequired
};

export default CarDesignCarousel;
