/* global describe it expect */
import React from 'react';
import renderer from 'react-test-renderer';

import WeatherBoard from './WeatherBoard';


describe('Component WeatherBoard', () => {
  it('should render component', () => {
    const component = renderer.create(
      <WeatherBoard
        display={false}
        temperature={12}
        location="London"
        icon="000"
      />
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render component', () => {
    const component = renderer.create(
      <WeatherBoard
        display
        temperature={12}
        location="London"
        icon="000"
      />
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
