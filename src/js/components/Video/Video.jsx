import React from 'react';
import PropTypes from 'prop-types';

/**
 * Video component
 * @param {Object} props
 */
const Video = ({ src }) => (
  <video autoPlay className="video-full">
    <track kind="captions" />
    <source src={src} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
);

Video.propTypes = {
  src: PropTypes.string.isRequired,
};

export default Video;
