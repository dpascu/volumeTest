import React from 'react';
import HelloWorld from '../HelloWorld.jsx';

/* global mount, expect, test */

test('Outputs hello world!', () => {
  const wrapper = mount(<HelloWorld />);

  const p = wrapper.find('p');
  expect(p.text()).toBe('Hello World!');
});