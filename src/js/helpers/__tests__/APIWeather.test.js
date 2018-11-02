/* global describe it expect */

import APIWeather from '../APIWeather';

describe('APIWeather', () => {
  it('should fetch data', async () => {
    const weather = await APIWeather.get();
    expect(weather).toBeDefined();
  });
});
