import { combineReducers } from 'redux';
import filters from './FiltersReducer';
import recipesReducer from './RecipesReducer';
import 'bootstrap/dist/css/bootstrap.min.css';

export default combineReducers({
  filters: filters.reducer,
  recipes: recipesReducer,
});
