/* global describe it expect */
import React from 'react';
import renderer from 'react-test-renderer';

import Layer from './Layer';

describe('Component Layer', () => {
  it('should render component', () => {
    const component = renderer.create(
      <Layer>
        Layer children
      </Layer>
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
