/* global describe it expect */
import React from 'react';
import renderer from 'react-test-renderer';

import Loader from './Loader';

describe('Component Loader', () => {
  it('should render component', () => {
    const component = renderer.create(
      <Loader />
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
