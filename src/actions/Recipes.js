// Action Types
export const ADD_RECIPES = 'ADD_RECIPES';

// Action Creators

/**
 * add recipes action
 * @param {Array} recipes
 */
export const addRecipes = recipes => ({
  type: ADD_RECIPES,
  recipes,
});
