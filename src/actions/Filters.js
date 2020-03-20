// Action Types
export const ADD_FILTER = 'ADD_FILTER';
export const CLEAR_FILTERS = 'CLEAR_FILTERS';
export const LOAD_FILTERS = 'LOAD_FILTERS';
export const REMOVE_FILTER = 'REMOVE_FILTER';

// Action Creators
export const addFilter = ingredient => ({
  type: ADD_FILTER,
  ingredient,
});

export const clearFilters = () => ({
  type: CLEAR_FILTERS,
});

export const loadFilters = filters => ({
  type: LOAD_FILTERS,
  filters,
});

export const removeFilter = ingredient => ({
  type: REMOVE_FILTER,
  ingredient,
});
