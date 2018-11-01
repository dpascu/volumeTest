import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather?q=London&appid=ec59b7497492a7ce74dd9571d9798e97&units=metric';

const get = async () => {
  const resp = await axios.get(URL);
  const { data } = resp;
  return data;
};

export default {
  get,
};
