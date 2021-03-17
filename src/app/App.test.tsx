import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import store, { persistor } from "../redux/store";

test('renders learn react link', () => {
  render(<App store={store} persistor={persistor} basename="/"/>);
  const linkElement = screen.getByText(/metronic/i);
  expect(linkElement).toBeInTheDocument();
});
