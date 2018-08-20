import React from 'react';
import { shallow } from 'enzyme';

import { App } from './app';

test('<App/> snapshot', () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toMatchSnapshot();
});
