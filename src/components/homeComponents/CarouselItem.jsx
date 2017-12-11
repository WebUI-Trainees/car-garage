import React from 'react';
import PropTypes from 'prop-types';

const CarouselItem = props => (
  <div className="carousel-item-wrapper home">
    <img src={props.events.img} alt="Mercedes" />
    <div onClick={props.getEvents} className="event-info">
      <h3>Basic offroad training, Austria</h3>
      <p>
        Black ice, emergency stops or sudden evasive manoeuvres on slick roads – we will prepare you for the chilly
        season in a fantastic Alpine setting. What do you do when your car starts to skid? What’s the right way to brake
        on icy roads? Learn to keep a cool head and to control your vehicle confidently even in surprising situations on
        the 120,000-square-meter ice arena in the Austrian driving training centre in Saalfelden.
      </p>
    </div>
  </div>
);

CarouselItem.propTypes = {
  getEvents: PropTypes.func.isRequired,
  events: PropTypes.arrayOf(
    PropTypes.shape({
      img: PropTypes.string,
      title: PropTypes.string,
      text: PropTypes.string
    })
  )
};

CarouselItem.defaultProps = {
  events: []
};

export default CarouselItem;
