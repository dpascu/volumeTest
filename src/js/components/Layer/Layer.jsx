import React from 'react';
import PropTypes from 'prop-types';

const Layer = ({ children }) => (
  <div className="layer">
    {children}
  </div>
);

Layer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layer;
