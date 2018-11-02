/* global describe it expect */
import React from 'react';
import renderer from 'react-test-renderer';

import Home from './Home';

describe('Container Home', () => {
  it('should render container', () => {
    const container = renderer.create(
      <Home />
    );

    const tree = container.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
