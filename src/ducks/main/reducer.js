import { types } from './actions';

export const reducer = (state = 5, action) => {
  switch (action.type) {
    case types.BUTTON_CLICK:
      return state - 1;
    default:
      return state;
  }
};
