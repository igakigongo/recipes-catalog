import { createSlice } from '@reduxjs/toolkit';

const recipesSlice = createSlice({
  initialState: [],
  name: 'recipes',
  reducers: {
    loadRecipes: (state, action) => action.payload,
  },
});

export const { loadRecipes } = recipesSlice.actions;
export default recipesSlice;
