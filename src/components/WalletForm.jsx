import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { coinApiAction } from '../redux/actions';
import requestApi from '../services/coinsApi';

class WalletForm extends Component {
  state = {
    expense: '',
    description: '',
    coin: 'USD',
    paymentMethod: 'Dinheiro',
    category: 'Alimentação',
  };

  async componentDidMount() {
    const { dispatch } = this.props;
    const coin = await requestApi();
    dispatch(coinApiAction(coin));
  }

  inputChange = ({ target }) => {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  };

  render() {
    const {
      expense,
      description,
      coin,
      paymentMethod,
      category,
    } = this.state;

    const { coins } = this.props;
    const arrayOfPayment = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const arrayOfCategory = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];

    return (
      <main>
        <label htmlFor="expense">
          Valor
          <input
            type="text"
            id="expense"
            name="expense"
            value={ expense }
            onChange={ this.inputChange }
            data-testid="value-input"
            placeholder="Type a value"
          />
        </label>

        <label htmlFor="coin">
          Moeda
          <select
            name="coin"
            id="coin"
            value={ coin }
            onChange={ this.inputChange }
            data-testid="currency-input"
          >
            { coins.map((coinss) => (
              <option key={ coinss }>{coinss}</option>
            ))}
          </select>
        </label>

        <label htmlFor="payment">
          Método de Pagamento
          <select
            name="paymentMethod"
            id="paymentMethod"
            value={ paymentMethod }
            onChange={ this.inputChange }
            data-testid="method-input"
          >
            { arrayOfPayment.map((pay) => (
              <option key={ pay }>{pay}</option>
            ))}
          </select>
        </label>

        <label htmlFor="category">
          Categoria
          <select
            name="category"
            id="category"
            value={ category }
            onChange={ this.inputChange }
            data-testid="tag-input"
          >
            { arrayOfCategory.map((cat) => (
              <option key={ cat }>{cat}</option>
            ))}
          </select>
        </label>

        <label htmlFor="description">
          Descrição
          <input
            type="text"
            name="description"
            id="description"
            value={ description }
            onChange={ this.inputChange }
            placeholder="Type a Description"
            data-testid="description-input"
          />
        </label>
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  coins: state.wallet.currencies,
});

WalletForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
  coins: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps)(WalletForm);
