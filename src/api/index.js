import { API_KEY, BASE_API_URL } from '../utils';

const axios = require('axios').default;

const api = (() => {
  /**
   * Get all recipes from the API
   */
  const getRecipes = async (ingredients = []) => {
    if (ingredients.length === 0) {
      const { data } = await axios.get(`${BASE_API_URL}/recipes/search?apiKey=${API_KEY}&number=50`);
      return data.results;
    }

    const query = ingredients.map(x => x.name).join('');
    const { data } = await axios.get(`${BASE_API_URL}/recipes/findByIngredients?apiKey=${API_KEY}&ingredients=${query}`);
    return data;
  };

  return {
    getRecipes,
  };
})();

export default api;
