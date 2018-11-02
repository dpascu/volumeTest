import axios from 'axios';

import getCurrentLocation from './getCurrentLocation';

/**
 * Builds the URL for the API Weather
 * @param {Object} params: {lat: latitude, lng: longitude}
 */
const urlBuilder = ({ lat, lng }) =>
  `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=ec59b7497492a7ce74dd9571d9798e97&units=metric`; // eslint-disable-line max-len


/**
 * Fetches the current weather from the location
 * given by getCurrentLocation helper
 */
const get = async () => {
  const loc = await getCurrentLocation();
  const url = urlBuilder(loc);
  const resp = await axios.get(url);
  const { data } = resp;
  return data;
};

export default {
  get,
};
