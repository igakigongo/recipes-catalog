import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import { Filter } from '../containers/Filter';

Enzyme.configure({ adapter: new Adapter() });

const setup = (filters = []) => {
  const props = {
    dispatch: jest.fn(),
    filters,
  };

  const enzymeWrapper = shallow(<Filter {...props} />);

  return {
    props,
    enzymeWrapper,
  };
};

describe('Filter', () => {
  test('should render with the default filter item - all', () => {
    const { enzymeWrapper: wrapper } = setup();
    expect(wrapper.find('select')).toHaveLength(1);
    expect(wrapper.find('select').children()).toHaveLength(1);
  });

  test('renders all filter items', () => {
    const filters = [...Array(10)].map((_, i) => ({
      code: i + 1, name: `filter-${i+1}`})
    );
    const { enzymeWrapper: wrapper } = setup(filters);
    expect(wrapper.find('select').children()).toHaveLength(11);
  });
});
