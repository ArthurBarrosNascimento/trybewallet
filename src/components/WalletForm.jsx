import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCurrences, getStateExpense } from '../redux/actions';

const INITIAL_STATE = {
  id: 0,
  value: '',
  description: '',
  currency: 'USD',
  method: 'Dinheiro',
  tag: 'Alimentação',
};

class WalletForm extends Component {
  state = {
    ...INITIAL_STATE,
  };

  async componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getCurrences());
  }

  inputChange = ({ target }) => {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  };

  handleCLick = (event) => {
    event.preventDefault();
    const { dispatch } = this.props;

    this.setState((prevState) => ({
      ...INITIAL_STATE,
      id: prevState.id + 1,
    }));
    console.log(this.state);

    dispatch(getStateExpense(this.state));
  };

  render() {
    const {
      value,
      description,
      currency,
      method,
      tag,
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
            id="value"
            name="value"
            value={ value }
            onChange={ this.inputChange }
            data-testid="value-input"
            placeholder="Type a value"
          />
        </label>

        <label htmlFor="coin">
          Moeda
          <select
            name="currency"
            id="coin"
            value={ currency }
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
            name="method"
            id="method"
            value={ method }
            onChange={ this.inputChange }
            data-testid="method-input"
          >
            { arrayOfPayment.map((pay) => (
              <option key={ pay }>{pay}</option>
            ))}
          </select>
        </label>

        <label htmlFor="tag">
          Categoria
          <select
            name="tag"
            id="tag"
            value={ tag }
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

        <button
          type="button"
          onClick={ (event) => this.handleCLick(event) }
        >
          Adicionar despesa
        </button>
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
