import filtersReducer from '../reducers/FiltersReducer';
import { addFilter, loadFilters, removeFilter } from '../actions/Filters';

describe('Filters Reducer', () => {
  let filters;

  beforeAll(() => {
    filters = [
      { code: 1, name: 'filter-1', checked: false },
      { code: 2, name: 'filter-2', checked: false },
    ];
  });

  it('adds a filter', () => {
    const ingredient = { code: 3, name: 'broccoli', checked: false };
    const state = filtersReducer(filters, addFilter(ingredient));
    expect(state.length).toEqual(3);
  });

  it('removes a filter', () => {
    const ingredientToRemove = filters[1];
    const state = filtersReducer(filters, removeFilter(ingredientToRemove));
    expect(state).toEqual([filters[0]]);
    expect(state.length).toEqual(1);
  });

  it('does not modify state for unknown actions', () => {
    const initialState = [];
    const state = filtersReducer(initialState, {});
    expect(state).toEqual([]);
  });

  it('loads filters', () => {
    const initialState = [];
    const filters = [
      { code: 1, name: 'filter-1' },
      { code: 2, name: 'filter-2' },
    ];
    const state = filtersReducer(initialState, loadFilters(filters));
    expect(state.length).toEqual(2);
    expect(state).toEqual(filters);
  });
});