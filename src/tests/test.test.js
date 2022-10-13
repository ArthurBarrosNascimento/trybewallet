import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import App from '../App';

describe('Test App TrybeWallet', () => {
  it('Test Login Page.', () => {
    const { history } = renderWithRouterAndRedux(<App />);

    const inputEmail = screen.getByPlaceholderText('Type a Email');
    const inputSenha = screen.getByPlaceholderText('Type a Password');
    const button = screen.getByRole('button');

    expect(inputEmail).toBeInTheDocument();
    expect(inputSenha).toBeInTheDocument();
    expect(button).toBeInTheDocument();

    userEvent.type(inputEmail, 'email@test.com');
    userEvent.type(inputSenha, '123456');
    userEvent.click(button);

    const { pathname } = history.location;
    expect(pathname).toBe('/carteira');
  });

  it('Test add expences and remove expenses', async () => {
    renderWithRouterAndRedux(<App />, { initialEntries: ['/carteira'] });

    const inputText = screen.getByPlaceholderText(/Type a Description/i);
    const btn = screen.getByRole('button', {
      name: /adicionar despesa/i,
    });
    const inputValue = screen.getByPlaceholderText(/Type a value/i);

    userEvent.type(inputText, '5 Dólares');
    userEvent.type(inputValue, '5');
    userEvent.click(btn);
    userEvent.click(btn);

    const buttonRemove = await screen.findAllByTestId('delete-btn');

    expect(buttonRemove[0]).toBeInTheDocument();

    userEvent.click(buttonRemove[0]);

    expect(buttonRemove[0]).not.toBeInTheDocument();
  });
});
