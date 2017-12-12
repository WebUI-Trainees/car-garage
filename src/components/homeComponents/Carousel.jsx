import React from 'react';
import Slider from 'react-slick';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import uuid from 'uuid';
import CarouselItem from './CarouselItem';

const EventsCarousel = props => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    accessibility: true,
    autoplay: true,
    autoplaySpeed: 3000
  };

  return (
    <Slider {...settings} className="design-carousel">
      {props.events.map(event => (
        <div key={uuid()}>
          <CarouselItem title={event.title} key={uuid()} text={event.text} img={event.img} />
        </div>
      ))}
    </Slider>
  );
};

const mapStateToProps = state => ({
  events: state.events
});

EventsCarousel.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      img: PropTypes.string,
      title: PropTypes.string,
      text: PropTypes.string
    })
  ),
  event: PropTypes.shape({
    img: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string
  })
};

EventsCarousel.defaultProps = {
  events: [],
  event: {}
};

export default connect(mapStateToProps)(EventsCarousel);
