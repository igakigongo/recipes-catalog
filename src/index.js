import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/presentational/App';
import store from './store';
import { fetchRecipes } from './api';
import { loadFilters } from './reducers/FiltersReducer';
import './index.css';

const ingredients = require('./data/ingredients.json');

const mappedIngredients = ingredients.map(x => ({
  ...x,
  checked: false,
}));

store.dispatch(loadFilters(mappedIngredients));
store.dispatch(fetchRecipes());

render(
  <Router>
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </Router>, document.getElementById('root'),
);
