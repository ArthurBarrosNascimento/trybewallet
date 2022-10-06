import React, { Component } from 'react';
import { connect } from 'react-redux';

class WalletForm extends Component {
  state = {
    expense: '',
    // description: '',
    // coin: '',
    // paymentMethod: '',
    // category: '',
  };

  inputChange = ({ target }) => {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  };

  render() {
    const {
      expense,
      // description,
      // coin,
      // paymentMethod,
      // category,
      // coinArray,
    } = this.state;

    // const { coins } = this.props;

    return (
      <main>
        <label htmlFor="expense">
          Valor
          <input
            type="text"
            id="expense"
            name="exchange"
            value={ expense }
            onChange={ this.inputChange }
          />
        </label>

        <label htmlFor="coin">
          Moeda
          <select
            name="coin"
            id="coin"
          >
            <option> ola </option>
          </select>
        </label>
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  coins: state.wallet.currencies,
});

export default connect(mapStateToProps)(WalletForm);
