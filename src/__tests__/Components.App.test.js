import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { createStore } from 'redux';
import rootReducer from '../reducers';
import App from '../components/App';

test('it renders', () => {
  const store = createStore(rootReducer);
  render(<Provider store={store}><App /></Provider>);
});
