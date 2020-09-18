import {SET_CURRENCY, SET_NEW_CURRENCY} from '../actionTypes/currency.types';

export const setCurrency = (data) => {
  return {type: SET_CURRENCY, payload: data}
}

export const setNewCurrency = (data) => {
  return {type: SET_NEW_CURRENCY, payload: data}
}