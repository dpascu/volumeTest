import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './HelloWorld';
import Image from './Image';
import CSS from './../css/main.scss'; // eslint-disable-line

/* global document */

ReactDOM.render(
  <div>
    <Image />
    <HelloWorld />
  </div>,
  document.getElementById('app'),
);
