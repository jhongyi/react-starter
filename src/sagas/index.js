// saga 統一出口

import { fork } from 'redux-saga/effects';
// import watchHelloSagas from '~~containers/Hello/HelloSagas';

/**
 * takeEvery: 允許並行處理
 * takeLatest: 不允許並行處理, 若同一個 action 名稱正在處李中, 那麼處理中的 action 會被取消, 只會執行當前的
 */
export default function* rootSaga() {
  yield [
    // fork(watchHelloSagas)
  ];
}
