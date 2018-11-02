/* global describe it expect */

import getCurrentLocation from '../getCurrentLocation';

describe('getCurrentLocation', () => {
  it('should fetch data', async () => {
    const weather = await getCurrentLocation();
    expect(weather).toMatchSnapshot();
  });
});
