import { DECREMENT, INCREMENT, RESET } from "../constants/counterConstant";

export const incrementCounter = value => {
  return {
    type: INCREMENT,
    payload: value
  };
};

export const decrementCounter = value => {
  return {
    type: DECREMENT,
    payload: value
  };
};

export const resetCounter = value => {
  return {
    type: RESET,
    payload: value
  };
};
