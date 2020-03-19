// Action Types
export const ADD_FILTER = 'ADD_FILTER';
export const LOAD_FILTERS = 'LOAD_FILTERS';
export const REMOVE_FILTER = 'REMOVE_FILTER';

// Action Creators
export const addFilter = filter => ({
  type: ADD_FILTER,
  filter,
});

export const loadFilters = filters => ({
  type: LOAD_FILTERS,
  filters,
});

export const removeFilter = filter => ({
  type: REMOVE_FILTER,
  filter,
});
