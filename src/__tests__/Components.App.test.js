import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { createStore } from 'redux';
import rootReducer from '../reducers';
import App from '../components/App';

test('renders learn react link', () => {
  const store = createStore(rootReducer);
  const { getByText } = render(<Provider store={store}><App /></Provider>);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
