import React, { Fragment, PureComponent } from 'react';

import Layer from '../../components/Layer';
import Video from '../../components/Video';
import WeatherBoard from '../../components/WeatherBoard';
import APIWeather from '../../helpers/APIWeather';
import LayerPositions from '../../constants/LayerPositions';

const SRC_VIDEO = '../../../media/video.mp4';

/**
 * Home Container
 */
class Home extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      temp: 0,
      loc: '',
      isTempLoaded: false,
      icon: null,
      layerPosition: 0,
    };
    this.isUnmounted = false;
  }

  componentDidMount() {
    this.fetchWeather();
    this.intervalWeather = setInterval(() => this.fetchWeather(), 30000);
    this.intervalPosition = setInterval(() => this.nextLayerPosition(), 5000);
  }

  async componentWillUnmount() {
    if (this.intervalPosition) clearInterval(this.intervalPosition);
    if (this.intervalWeather) clearInterval(this.intervalWeather);
    this.isUnmounted = true;
  }

  async fetchWeather() {
    const weather = await APIWeather.get();
    if (!this.isUnmounted) {
      this.setState({
        temp: weather.main.temp,
        loc: weather.name,
        icon: weather.weather.length && weather.weather[0].icon,
        isTempLoaded: true
      });
    }
  }

  nextLayerPosition() {
    const { layerPosition } = this.state;
    this.setState({ layerPosition: (layerPosition + 1) % LayerPositions.length });
  }

  render() {
    const { temp, loc, icon, isTempLoaded, layerPosition } = this.state;

    return (
      <Fragment>
        <Layer position={LayerPositions[layerPosition]}>
          <WeatherBoard
            display={isTempLoaded}
            temperature={temp}
            location={loc}
            icon={icon}
          />
        </Layer>
        <Video src={SRC_VIDEO} />
      </Fragment>
    );
  }
}

export default Home;
