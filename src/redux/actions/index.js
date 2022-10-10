// Coloque aqui suas actions
import { currincesApi, requestApi } from '../services/coinsApi';

export const ACTION_USER = 'USER';
export const ACTION_COIN = 'COIN';
export const ACTION_EXPENSES = 'EXPENSES';

export const userAction = (payload) => ({
  type: ACTION_USER,
  payload,
});

export const coinApiAction = (payload) => ({
  type: ACTION_COIN,
  payload,
});

export const AddExpenseApiAction = (payload) => ({
  type: ACTION_EXPENSES,
  payload,
});

export const getCurrences = () => async (dispatch) => {
  const data = await requestApi();
  dispatch(coinApiAction(data));
};

export const getStateExpense = (expenses) => async (dispatch) => {
  const api = await currincesApi();
  console.log(api);

  dispatch(AddExpenseApiAction({
    ...expenses,
    exchangeRates: api,
  }));
};
