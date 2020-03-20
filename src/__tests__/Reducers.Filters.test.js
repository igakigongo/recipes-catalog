import filtersReducer from '../reducers/FiltersReducer';
import { addFilter, clearFilters, loadFilters, removeFilter } from '../actions/Filters';

const ingredientsData = require('../data/ingredients.json');

describe('Filters Reducer', () => {
  let filters;

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

  it('applies a filter', () => {
    const ingredient = filters[0];
    const state = filtersReducer(filters, addFilter(ingredient));
    const newIngredient = state.find(x => x.code === ingredient.code);
    expect(newIngredient.checked).toBe(true);
  });

  it('clears all filters', () => {
    filters = filters.map((x, i) => (i % 2 === 0 ? {
      ...x,
      checked: true,
    }: x));
    expect(filters.filter(x => x.checked).length).toEqual(500);
    const state = filtersReducer(filters, clearFilters());
    expect(state.every(x => x.checked === false)).toBe(true);
  });

  it('removes a filter', () => {
    filters[1].checked = true;
    const ingredient = filters[1];
    const state = filtersReducer(filters, removeFilter(ingredient));
    const newIngredient = state.find(x => x.code === ingredient.code);
    expect(newIngredient.checked).toBe(false);
  });

  it('does not mutate state for unknown actions', () => {
    const initialState = [];
    const state = filtersReducer(initialState, {});
    expect(state).toEqual([]);
  });

  it('loads filters', () => {
    const initialState = [];
    const state = filtersReducer(initialState, loadFilters(filters));
    expect(state.length).toEqual(1000);
    expect(state).toEqual(filters);
  });
});