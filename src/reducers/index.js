import { combineReducers } from 'redux';
import filtersReducer from './FiltersReducer';
import recipesReducer from './RecipesReducer';
import 'bootstrap/dist/css/bootstrap.min.css';

export default combineReducers({
  filters: filtersReducer,
  recipes: recipesReducer,
});
