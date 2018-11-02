const DEF_POS = { lat: 51.5074, lng: 0.1278 };

/**
 * Fetches current coordinates, or defaults one if it doesn't work
 * @returns {Object} {lat, lng}
 */
const getCurrentLocation = () =>
  new Promise((res) => {
    if (!navigator.geolocation || !navigator.geolocation.getCurrentPosition) res(DEF_POS);
    navigator.geolocation.getCurrentPosition((pos) => {
      const { latitude: lat, longitude: lng } = pos.coords;
      res({ lat, lng });
    }, () => {
      res(DEF_POS);
    });
  });

export default getCurrentLocation;
