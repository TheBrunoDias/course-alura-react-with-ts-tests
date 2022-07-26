import { act, fireEvent, render, screen } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import { Form } from '.';

describe('Form.tsx behavior', () => {
  test('When the input is empty, new users cannot be add', () => {
    render(
      <RecoilRoot>
        <Form />
      </RecoilRoot>
    );

    // find input in DOM
    const input = screen.getByPlaceholderText('Insira os nomes dos participantes');

    // find button
    const button = screen.getByRole('button');

    // guarantee that the input is render
    expect(input).toBeInTheDocument();

    // guarantee thar the button is render
    expect(button).toBeDisabled();
  });

  test('Add new participant if name is input is filled', () => {
    render(
      <RecoilRoot>
        <Form />
      </RecoilRoot>
    );
    // find input in DOM
    const input = screen.getByPlaceholderText('Insira os nomes dos participantes');

    // find button
    const button = screen.getByRole('button');

    // add value to input
    fireEvent.change(input, {
      target: {
        value: 'Bruno Dias',
      },
    });

    // submit on button (click)
    fireEvent.click(button);

    // guarantee that the input has focus

    expect(input).toHaveFocus();

    // guarantee that the input has no value
    expect(input).toHaveValue('');
  });

  test('Duplicated names cannot be add in list', () => {
    render(
      <RecoilRoot>
        <Form />
      </RecoilRoot>
    );
    // find input in DOM
    const input = screen.getByPlaceholderText('Insira os nomes dos participantes');

    // find button
    const button = screen.getByRole('button');

    // add value to input
    fireEvent.change(input, {
      target: {
        value: 'Bruno Dias',
      },
    });

    // submit on button (click)
    fireEvent.click(button);

    // add value to input
    fireEvent.change(input, {
      target: {
        value: 'Bruno Dias',
      },
    });

    // submit on button (click)
    fireEvent.click(button);

    const errorMessage = screen.getByRole('alert');
    expect(errorMessage.textContent).toBe('Nomes duplicados não são permitidos!');
  });

  test('Remove error message after timer', () => {
    jest.useFakeTimers();

    render(
      <RecoilRoot>
        <Form />
      </RecoilRoot>
    );
    // find input in DOM
    const input = screen.getByPlaceholderText('Insira os nomes dos participantes');

    // find button
    const button = screen.getByRole('button');

    // add value to input
    fireEvent.change(input, {
      target: {
        value: 'Bruno Dias',
      },
    });

    // submit on button (click)
    fireEvent.click(button);

    // add value to input
    fireEvent.change(input, {
      target: {
        value: 'Bruno Dias',
      },
    });

    // submit on button (click)
    fireEvent.click(button);

    let errorMessage = screen.queryByRole('alert');
    expect(errorMessage).toBeInTheDocument();

    // wait n seconds
    act(() => {
      jest.runAllTimers();
    });

    errorMessage = screen.queryByRole('alert');

    expect(errorMessage).toBeNull();
  });
});
