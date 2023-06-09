// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { ACTION_COIN, ACTION_EXPENSES, ACTION_DELETE } from '../actions';

const INITIAL_STATE = {
  currencies: [], // array de string
  expenses: [], // array de objetos, com cada objeto tendo as chaves id, value, currency, method, tag, description e exchangeRates
  editor: false, // valor booleano que indica de uma despesa está sendo editada
  idToEdit: 0, // valor numérico que armazena o id da despesa que esta sendo editada
};

function walletReducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
  case ACTION_COIN:
    return {
      ...state,
      currencies: payload,
    };
  case ACTION_EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses, payload],
    };
  case ACTION_DELETE:
    return {
      ...state,
      expenses: payload,
    };
  default:
    return state;
  }
}

export default walletReducer;
