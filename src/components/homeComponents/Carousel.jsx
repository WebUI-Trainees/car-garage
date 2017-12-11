import React from 'react';
import Slider from 'react-slick';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import uuid from 'uuid';
import CarouselItem from './CarouselItem';
import getEvents from '../../actions/getEvents';

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

const mapDispatchToProps = dispatch => bindActionCreators({ getEvents }, dispatch);
const mapStateToProps = state => ({
  events: state.events
});

EventsCarousel.propTypes = {
  getEvents: PropTypes.func.isRequired,
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

export default connect(mapStateToProps, mapDispatchToProps)(EventsCarousel);
