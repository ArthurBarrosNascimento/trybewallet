import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import App from '../App';

describe('Testando App TrybeWallet', () => {
  it('Testando Login Page.', () => {
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
});
