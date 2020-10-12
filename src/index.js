import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/presentational/App';
import store from './store';
import { loadFilters } from './reducers/FiltersReducer';

const ingredients = require('./data/ingredients.json');

const mappedIngredients = ingredients.map(x => ({
  ...x,
  checked: false,
}));

store.dispatch(loadFilters(mappedIngredients));

render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>, document.getElementById('root'),
);
