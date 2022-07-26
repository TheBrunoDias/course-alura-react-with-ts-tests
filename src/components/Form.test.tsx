import { render, screen } from '@testing-library/react';
import React from 'react';
import { Form } from './Form';

test('When the input is empty, new users cannot be add', () => {
  render(<Form />);

  // find input in DOM
  const input = screen.getByPlaceholderText('Insira os nomes dos participantes');

  // find button
  const button = screen.getByRole('button');

  // guarantee that the input is render
  expect(input).toBeInTheDocument();

  // guarantee thar the button is render
  expect(button).toBeDisabled();
});
