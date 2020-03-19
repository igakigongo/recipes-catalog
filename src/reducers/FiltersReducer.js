import { ADD_FILTER, LOAD_FILTERS, REMOVE_FILTER } from '../actions/Filters';

const initialState = [];

const filtersReducer = (state = initialState, action) => {
  const { filter, type } = action;
  switch (type) {
    case ADD_FILTER: {
      return [filter, ...state];
    }
    case REMOVE_FILTER: {
      return state.filter(x => x.code !== filter.code);
    }
    case LOAD_FILTERS: {
      const { filters } = action;
      return [...state, ...filters];
    }
    default: {
      return state;
    }
  }
};

export default filtersReducer;
