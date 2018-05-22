import { handleActions } from 'redux-actions';
import { actionTypes } from './HelloActions';

const initialState = {
  word: ''
};

export default handleActions({
  [actionTypes.SAVE_HELLO]: (state, payload) => {
    const { word } = payload;
    return {
      ...state,
      word
    };
  }
}, initialState);
