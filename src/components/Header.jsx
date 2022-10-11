import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  // expenses.map((element) => (element.exchangeRates[element.currency].ask * element.value)

  somaExpenses = () => {
    const { expenses } = this.props;
    const INITIAL_VALUE = 0;
    const coin = expenses.map((exp) => (exp.exchangeRates[exp.currency].ask * exp.value));

    const result = coin.reduce((previousValue, currentValue) => {
      const retorno = previousValue + currentValue;
      return retorno;
    }, INITIAL_VALUE);

    const money = result.toFixed(2);

    return money;
  };

  render() {
    const { email } = this.props;

    const exchange = 'BRL';
    return (
      <div>
        <article>
          <h2 data-testid="email-field">{ email }</h2>
        </article>

        <article>
          <h2 data-testid="header-currency-field">{ exchange }</h2>
          <h2 data-testid="total-field">{ this.somaExpenses() }</h2>
        </article>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.shape({
    map: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps)(Header);
