
import React from 'react';
import Table from '../table'
import  Root from '../../Root'
import { mount, shallow } from 'enzyme';

let wrapper, mounted;
  beforeEach(() => {
    wrapper = shallow(<Table />);
})

it('Table is present', () => {
    expect(wrapper.find('.tableContainer').length).toEqual(1)
});
