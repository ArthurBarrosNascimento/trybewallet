// Esse reducer será responsável por tratar as informações da pessoa usuária
import { ACTION_USER } from '../actions';

const INITIAL_STATE = {
  email: '', // string que armazena o email da pessoa usuária
};

function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case ACTION_USER:
    return {
      email: action.payload,
    };
  default:
    return state;
  }
}

export default userReducer;
