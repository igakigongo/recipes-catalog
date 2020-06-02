import { combineReducers } from 'redux';
import filtersSlice from './FiltersReducer';
import recipesSlice from './RecipesReducer';

export default combineReducers({
  filters: filtersSlice.reducer,
  recipes: recipesSlice.reducer,
});
