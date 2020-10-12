/* eslint-disable import/prefer-default-export */
import { loadRecipes, setFetching } from '../reducers/RecipesReducer';
import { API_KEY, BASE_API_URL } from '../utils';

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
