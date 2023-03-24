import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { test, expect } from 'vitest';
import App from './App';

test('renders CoteFácil title', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/CoteFácil/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders adicionar button', () => {
  const { getByText } = render(<App />);
  const buttonElement = getByText(/Adicionar/i);
  expect(buttonElement).toBeInTheDocument();
});

test('renders cronometro button', () => {
  const { getByText } = render(<App />);
  const buttonElement = getByText(/Cronometro/i);
  expect(buttonElement).toBeInTheDocument();
});
