import {
  ADD_FILTER, CLEAR_FILTERS, LOAD_FILTERS, REMOVE_FILTER,
} from '../actions/Filters';

const initialState = [];

const filtersReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case ADD_FILTER: {
      const { ingredient: { code } } = action;
      return state.map(x => (x.code === code ? {
        ...x,
        checked: true,
      } : x));
    }
    case CLEAR_FILTERS: {
      return state.map(x => ({
        ...x,
        checked: false,
      }));
    }
    case REMOVE_FILTER: {
      const { ingredient: { code } } = action;
      const updatedIngredients = state.map(x => (x.code === code ? {
        ...x,
        checked: false,
      } : x));
      return updatedIngredients;
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
