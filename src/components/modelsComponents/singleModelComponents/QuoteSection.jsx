import React from 'react';
import PropTypes from 'prop-types';

const QuoteSection = ({ quote }) => (
  <section className="quote-section">
    <div className="quote-wrapper">
      <h2 className="title">{quote}</h2>
    </div>
  </section>
);

QuoteSection.propTypes = {
  quote: PropTypes.string.isRequired
};

export default QuoteSection;
