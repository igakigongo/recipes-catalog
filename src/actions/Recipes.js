// Action Types
export const LOAD_RECIPES = 'ADD_RECIPES';

// Action Creators

/**
 * add recipes action
 * @param {Array} recipes
 */
export const loadRecipes = recipes => ({
  type: LOAD_RECIPES,
  recipes,
});
