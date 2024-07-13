import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App'; // Adjust the import path as per your actual file structure

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

