import React from 'react';
import PropTypes from 'prop-types';

const FilterOptions = ({ options, selectedOption, changeOption }) => {
  const handleChange = event => {
    const val = event.target.value;

    changeOption(val);
  };

  return (
    <div className="car-models-select">
      <div className="select-wrapper">
        <span>Choose a model: </span>
        <select id="model" value={selectedOption} onChange={handleChange}>
          {options.map(option => {
            let currentOption = option;

            if (currentOption === 'All Models') {
              currentOption = '';
            }

            return (
              <option key={option} value={currentOption}>
                {option}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

FilterOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  selectedOption: PropTypes.string.isRequired,
  changeOption: PropTypes.func.isRequired
};

export default FilterOptions;
