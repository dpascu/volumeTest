/* global describe it expect */
import React from 'react';
import renderer from 'react-test-renderer';

import Video from './Video';

const SRC_VIDEO = '../../../media/video.mp4';

describe('Component Video', () => {
  it('should render component', () => {
    const component = renderer.create(
      <Video src={SRC_VIDEO} />
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
