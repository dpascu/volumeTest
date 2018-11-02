import React from 'react';
import PropTypes from 'prop-types';

import LayerPositions from '../../constants/LayerPositions';

/**
 * Information layer over the video
 * @param {Object} props
 */
const Layer = ({ children, position }) => (
  <div className={`layer ${position}`}>
    {children}
  </div>
);

Layer.propTypes = {
  children: PropTypes.node.isRequired,
  position: PropTypes.PropTypes.oneOf(LayerPositions),
};

Layer.defaultProps = {
  position: 'left-up',
};

export default Layer;
