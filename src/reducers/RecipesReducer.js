import { LOAD_RECIPES } from '../actions/Recipes';

const initialState = [];

const recipesReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case LOAD_RECIPES: {
      return action.recipes;
    }
    default: {
      return state;
    }
  }
};

export default recipesReducer;
