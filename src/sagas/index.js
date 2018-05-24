// saga 統一出口

import { fork } from 'redux-saga/effects';
import watchHelloSagas from '~~containers/Hello/HelloSagas';

export default function* rootSaga() {
  yield [
    fork(watchHelloSagas)
  ];
}
