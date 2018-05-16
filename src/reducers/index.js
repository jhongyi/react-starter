import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import hello from '~~containers/Hello/HelloReducer';

const rootReducer = combineReducers({
  form: formReducer,
  hello
});

export default rootReducer;
