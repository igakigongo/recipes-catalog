import recipesReducer from '../reducers/RecipesReducer';
import { loadRecipes } from '../actions/Recipes';

describe('Recipes Reducer', () => {
  it('loads recipes', () => {
    const fetchedRecipes = [...Array(10)].map((_, index) => ({
      code: index + 1,
      name: `recipe-${index+1}`
    }));
    const state = recipesReducer([], loadRecipes(fetchedRecipes));
    expect(state.length).toEqual(fetchedRecipes.length);
  });

  it('does not mutate state for unknown actions', () => {
    const state = recipesReducer([], {});
    expect(state.length).toEqual(0);
  });
});
