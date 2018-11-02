import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Loader from '../Loader';

/**
 * Board for displaying the weather
 * @param {Object} props
 */
const WeatherBoard = ({ display, temperature, location, icon }) => {
  const tempDisplay = temperature.toFixed(1);
  return (
    <div className="weather">
      {display
        ? (
          <Fragment>
            <div className="location">
              {location}
            </div>
            <div>
              {icon && <img src={`http://openweathermap.org/img/w/${icon}.png`} alt="icon" />}
              <span className="temperature">
                {`${tempDisplay}º`}
              </span>
            </div>
          </Fragment>
        )
        : <Loader />}
    </div>);
};

WeatherBoard.propTypes = {
  display: PropTypes.bool,
  temperature: PropTypes.number.isRequired,
  location: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

WeatherBoard.defaultProps = {
  display: true,
  icon: null,
};

export default WeatherBoard;
