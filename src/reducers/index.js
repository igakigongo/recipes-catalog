import { combineReducers } from 'redux';
import filtersReducer from './FiltersReducer';
import recipesReducer from './RecipesReducer';

export default combineReducers({
  filters: filtersReducer,
  recipes: recipesReducer,
});
