import { createStore } from 'redux';
import { loadRecipes } from '../reducers/RecipesReducer';
import reducer from '../reducers';

describe('Recipes Reducer', () => {
  let store;

  beforeAll(() => {
    store = createStore(reducer);
  });

  it('loads recipes', () => {
    const fetchedRecipes = [...Array(10)].map((_, index) => ({
      code: index + 1,
      name: `recipe-${index+1}`
    }));

    store.dispatch(loadRecipes(fetchedRecipes));
    const { data: items } = store.getState().recipes;
    expect(items.length).toEqual(10);
  });
});
