import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addFilter } from '../actions/Filters';

const defaultFilter = {
  checked: true,
  code: 'all',
  name: '-- show all --',
};

export const Filter = ({ dispatch, filters }) => (
  <select>
    {[defaultFilter, ...filters].map(x => (
      <option
        key={x.code}
        onChange={() => {
          dispatch(addFilter(x));
        }}
        value={x.code}
      >
        {x.name}
      </option>
    ))}
  </select>
);

const mapStateToProps = state => {
  const { filters } = state;
  return {
    filters,
  };
};

Filter.propTypes = {
  dispatch: PropTypes.func.isRequired,
  filters: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps)(Filter);
