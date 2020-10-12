import { loadRecipes } from '../reducers/RecipesReducer';
import { API_KEY, BASE_API_URL } from '../utils';

const axios = require('axios').default;

/**
 * Get all recipes from the API
 */
export const fetchRecipes = (ingredients = []) => dispatch => {
  if (ingredients.length === 0) {
    return axios
      .get(`${BASE_API_URL}/recipes/search?apiKey=${API_KEY}&number=50`)
      .then(({ data: { results } }) => {
        dispatch(loadRecipes(results));
      });
  }

  const query = ingredients.map(x => x.name).join('');
  return axios
    .get(`${BASE_API_URL}/recipes/findByIngredients?apiKey=${API_KEY}&ingredients=${query}`)
    .then(({ data }) => {
      dispatch(loadRecipes(data));
    });
};
