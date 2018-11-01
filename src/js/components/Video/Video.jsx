import React from 'react';
import PropTypes from 'prop-types';

const Video = ({ src }) => (
  <div>
    <video autoPlay className="video-full">
      <track kind="captions" />
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
);

Video.propTypes = {
  src: PropTypes.string.isRequired,
};

export default Video;
