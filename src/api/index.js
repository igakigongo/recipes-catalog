const axios = require('axios').default;

const api = (() => {
  const API_KEY = 'feafd5b56495493bab1d19fd4290f57c';
  const BASE_URL = 'https://api.spoonacular.com/recipes';
  /**
   * Get all recipes from the API
   */
  const getRecipes = (ingredients = []) => {
    if (ingredients.length === 0) {
      return axios.get(`${BASE_URL}/search?apiKey=${API_KEY}&number=50`)
        .then(({ data }) => data.results);
    }

    const query = ingredients.map(x => x.name).join('');
    return axios.get(`${BASE_URL}/findByIngredients?apiKey=${API_KEY}&ingredients=${query}`)
      .then(({ data }) => data);
  };

  return {
    getRecipes,
  };
})();

export default api;
