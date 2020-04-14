import React from 'react';
import Earthquake from '../Earthquake/Earthquake';
import {shallow} from 'enzyme';

const earthquake = {
  datetime: '2011-03-11 04:46:23',
  depth: 24.4,
  lng: 142.369,
  src: 'us',
  eqid: 'c0001xgp',
  magnitude: 8.8,
  lat: 38.322,
};

const lightEarthquake = {
  datetime: '2011-03-11 04:46:23',
  depth: 24.4,
  lng: 142.369,
  src: 'us',
  eqid: 'c0001xgp',
  magnitude: 5.8,
  lat: 38.322,
};

describe('<Earthquake />', () => {
  it('renders Earthquake', () => {
    const wrapper = shallow(<Earthquake info={earthquake} />);
    expect(wrapper.exists()).toEqual(true);
  });

  it('should have bg-danger className on magnitude 8 or above', () => {
    const wrapper = shallow(<Earthquake info={earthquake} />);
    expect(wrapper.exists('.bg-danger')).toEqual(true);
  });

  it('should NOT have bg-danger className on magnitude below 8', () => {
    const wrapper = shallow(<Earthquake info={lightEarthquake} />);
    expect(wrapper.exists('.bg-danger')).toEqual(false);
  });
});

