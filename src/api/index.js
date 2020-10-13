import { API_KEY, BASE_API_URL } from '../utils';
import { loadRecipes, setFetching } from '../reducers/RecipesReducer';
import {
  setFetchingRecipeInstructions,
  setInstructions,
  setRecipe,
} from '../reducers/RecipeDetailsReducer';

const axios = require('axios').default;

/**
 * Get all recipes from the API
 */
export const fetchRecipes = (ingredients = []) => dispatch => {
  dispatch(setFetching(true));

  if (ingredients.length === 0) {
    return axios
      .get(`${BASE_API_URL}/recipes/search?apiKey=${API_KEY}&number=50`)
      .then(({ data: { results } }) => {
        dispatch(loadRecipes(results));
      })
      .finally(() => {
        dispatch(setFetching(false));
      });
  }

  dispatch(setFetching(true));
  const query = ingredients.map(x => x.name).join('');
  return axios
    .get(`${BASE_API_URL}/recipes/findByIngredients?apiKey=${API_KEY}&ingredients=${query}`)
    .then(({ data }) => {
      dispatch(loadRecipes(data));
    })
    .finally(() => {
      dispatch(setFetching(false));
    });
};

export const fetchRecipeInstructions = id => (dispatch, getState) => {
  dispatch(setFetchingRecipeInstructions(true));
  // console.log(getState());
  const recipe = getState().recipes.data.find(x => x.id === id);

  return axios
    .get(`${BASE_API_URL}/recipes/${id}/analyzedInstructions?apiKey=${API_KEY}`)
    .then(({ data }) => {
      const { steps } = data[0];
      dispatch(setRecipe(recipe));
      dispatch(setInstructions(steps));
    })
    .finally(() => {
      dispatch(setFetchingRecipeInstructions(false));
    });
};
