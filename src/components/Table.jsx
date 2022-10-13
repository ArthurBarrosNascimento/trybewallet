import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DeleteExpense } from '../redux/actions';

class Table extends Component {
  convertCambio = (ask) => {
    const result = Number(ask);
    return Number(result).toFixed(2);
  };

  valueConvertido = (value, ask) => {
    const result = Number(value) * Number(ask);
    return Number(result).toFixed(2);
  };

  DeleteExpensesById = (value) => {
    const { expenses, dispatch } = this.props;

    const result = expenses.filter((exp) => exp.id !== value);

    dispatch(DeleteExpense(result));
  };

  render() {
    const { expenses } = this.props;
    console.log(expenses);
    return (
      <table>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>

        <tbody>
          {
            expenses.map((e) => (
              <tr key={ e.id }>
                <td>{e.description}</td>
                <td>{e.tag}</td>
                <td>{e.method}</td>
                <td>{Number(e.value).toFixed(2)}</td>
                <td>{e.exchangeRates[e.currency].name}</td>
                <td>{this.convertCambio(e.exchangeRates[e.currency].ask)}</td>
                <td>{this.valueConvertido(e.value, e.exchangeRates[e.currency].ask)}</td>
                <td>Real</td>
                <td>
                  <button
                    type="button"
                    onClick={ () => this.DeleteExpensesById(e.id) }
                    data-testid="delete-btn"
                  >
                    Excluir

                  </button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    );
  }
}

Table.propTypes = {
  dispatch: PropTypes.func.isRequired,
  expenses: PropTypes.shape({
    filter: PropTypes.func,
    map: PropTypes.func.isRequired,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Table);
