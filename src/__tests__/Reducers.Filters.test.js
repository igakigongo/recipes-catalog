import { createStore, combineReducers } from 'redux';
import filtersSlice, {
  addFilter,
  clearFilters,
  loadFilters,
  removeFilter
} from '../reducers/FiltersReducer';

const ingredientsData = require('../data/ingredients.json');

describe('Filters Reducer', () => {
  let filters;
  let store;

  beforeAll(() => {
    filters = ingredientsData.map(x => {
      const { code, name } = x;
      return {
        code,
        checked: false,
        name,
      };
    });
  });

  beforeEach(() => {
    const reducer = combineReducers({
      filters: filtersSlice.reducer
    });
    store = createStore(reducer);
    store.dispatch(loadFilters(filters));
  });

  it('applies a filter', () => {
    const ingredient = filters[0];
    store.dispatch(addFilter(ingredient));
    const newIngredient = store.getState().filters.find(x => x.code === ingredient.code);
    expect(newIngredient.checked).toBe(true);
  });

  it('clears all filters', () => {
    filters = filters.map((x, i) => (i % 2 === 0 ? {
      ...x,
      checked: true,
    }: x));
    expect(filters.filter(x => x.checked).length).toEqual(500);
    store.dispatch(clearFilters());
    const { filters: filtersFromState } = store.getState();
    expect(filtersFromState.every(x => x.checked === false)).toBe(true);
  });

  it('removes a filter', () => {
    const ingredient = filters[0];
    store.dispatch(addFilter(ingredient));
    let newIngredient = store.getState().filters.find(x => x.code === ingredient.code);
    expect(newIngredient.checked).toBe(true);

    store.dispatch(removeFilter(ingredient));
    newIngredient = store.getState().filters.find(x => x.code === ingredient.code);
    expect(newIngredient.checked).toBe(false);
  });

  it('loads filters', () => {
    const state = store.getState().filters;
    expect(state.length).toEqual(1000);
    expect(state).toEqual(filters);
  });
});