import { createSlice } from '@reduxjs/toolkit';

const recipesSlice = createSlice({
  initialState: {
    data: [],
    fetching: false,
  },
  name: 'recipes',
  reducers: {
    loadRecipes: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { loadRecipes } = recipesSlice.actions;
export default recipesSlice;
