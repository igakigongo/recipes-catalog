const initialState = {
  recipes: [],
};

const recipesReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    default: {
      return state;
    }
  }
};

export default recipesReducer;
