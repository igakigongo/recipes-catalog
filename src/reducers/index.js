import { combineReducers } from 'redux';
import filtersReducer from './FiltersReducer';
import recipesReducer from './RecipesReducer';
import recipeDetailsReducer from './RecipeDetailsReducer';

export default combineReducers({
  filters: filtersReducer,
  recipes: recipesReducer,
  recipeDetails: recipeDetailsReducer,
});
