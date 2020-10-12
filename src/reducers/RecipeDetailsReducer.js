/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const recipeDetailsSlice = createSlice({
  initialState: {
    data: {
      fetchingInstructions: false,
      instructions: [],
      recipe: undefined
    },
  },
  name: 'recipeDetails',
  reducers: {
    setFetchingRecipeInstructions: (state, action) => {
      state.fetchingInstructions = action.payload;
    },
    setInstructions: (state, action) => {
      state.instructions = action.payload;
    },
    setRecipe: (state, action) => {
      state.recipe = action.payload;
    },
  },
});

export const {
  setFetchingRecipeInstructions,
  setInstructions,
  setRecipe
} = recipeDetailsSlice.actions;

export default recipeDetailsSlice.reducer;
