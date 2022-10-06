// Coloque aqui suas actions
export const ACTION_USER = 'USER';
export const ACTION_COIN = 'COIN';

export const userAction = (payload) => ({
  type: ACTION_USER,
  payload,
});

export const coinApiAction = (payload) => ({
  type: ACTION_COIN,
  payload,
});
