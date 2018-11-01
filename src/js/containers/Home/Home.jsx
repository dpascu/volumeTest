import React, { Fragment, PureComponent } from 'react';

import Layer from '../../components/Layer';
import Video from '../../components/Video';
import APIWeather from '../../helpers/APIWeather';

const SRC_VIDEO = '../../../media/unmade.mp4';

class Home extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      temp: 0,
      isTempLoaded: false,
    };
  }

  async componentDidMount() {
    const weather = await APIWeather.get();
    this.setState({ temp: weather.main.temp, isTempLoaded: true });
  }

  render() {
    const { temp, isTempLoaded } = this.state;
    const temperature = isTempLoaded ? temp : '--';
    return (
      <Fragment>
        <Video src={SRC_VIDEO} />
        <Layer>
          {`${temperature}º`}
        </Layer>
      </Fragment>
    );
  }
}

export default Home;
