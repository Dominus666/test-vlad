import { SET_CURRENCY, SET_NEW_CURRENCY } from '../actionTypes/currency.types';

const currency = (state = {}, action) => {
  switch (action.type) {
    case SET_CURRENCY:
      return {
        defaultCarrency: [...action.payload],
        newCarrency: [...action.payload]
      }
    case SET_NEW_CURRENCY:
      const index = state.newCarrency.findIndex(item => item.ccy === action.payload.ccy);
      state.newCarrency.splice(index, 1, action.payload);
      return state
    default:
      return state
  };
};

export default currency;