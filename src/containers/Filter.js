import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addFilter, clearFilters, removeFilter } from '../actions/Filters';

export const Filter = ({ dispatch, filters }) => (
  <>
    <button
      className="btn btn-block btn-filter btn-sm"
      onClick={() => {
        dispatch(clearFilters());
      }}
      type="button"
    >
      clear all filters
    </button>
    <ul className="list-unstyled mt-3">
      {filters.sort(x => x.name).map(x => (
        <li key={x.code} className="custom-control custom-checkbox">
          <input
            checked={x.checked}
            className="custom-control-input"
            id={`recipe-${x.code}`}
            onChange={e => {
              const { checked } = e.target;
              const action = checked ? addFilter(x) : removeFilter(x);
              dispatch(action);
            }}
            type="checkbox"
          />
          <label className="custom-control-label" htmlFor={`recipe-${x.code}`}>
            {x.name}
          </label>
        </li>
      ))}
    </ul>
  </>
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
