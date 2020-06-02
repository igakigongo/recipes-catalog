import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './components/App';
import store from './store';
import { loadFilters } from './reducers/FiltersReducer';

const ingredients = require('./data/ingredients.json');

const mappedIngredients = ingredients.map(x => ({
  ...x,
  checked: false,
}));

store.dispatch(loadFilters(mappedIngredients));

render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
