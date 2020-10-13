import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  initialState: [],
  name: 'filters',
  reducers: {
    addFilter: (state, action) => {
      const { code } = action.payload;
      const filter = state.find(x => x.code === code);
      if (filter) filter.checked = true;
    },
    clearFilters: state => state.map(filter => ({
      ...filter,
      checked: false,
    })),
    removeFilter: (state, action) => {
      const { code } = action.payload;
      const updatedIngredients = state.map(x => (x.code === code ? {
        ...x,
        checked: false,
      } : x));
      return updatedIngredients;
    },
    loadFilters: (state, action) => action.payload,
  },
});

export const {
  addFilter,
  clearFilters,
  removeFilter,
  loadFilters,
} = filtersSlice.actions;

export default filtersSlice.reducer;
