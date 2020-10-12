/* eslint-disable no-param-reassign */
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
    setFetching: (state, action) => {
      state.fetching = action.payload;
    },
  },
});

export const { loadRecipes, setFetching } = recipesSlice.actions;
export default recipesSlice;
