import { takeEvery, put } from 'redux-saga/effects';
// import * as HelloActions from '~~containers/Hello/HelloActions';

export const actionTypes = {
  SAY_HELLO: 'SAY_HELLO',
  SAVE_HELLO: 'SAVE_HELLO'
};

function* sayHello() {
  try {
    const word = 'first redux saga msg';
    // 直接 dispatch action 至 reducer
    yield put({ type: actionTypes.SAVE_HELLO, word });
  } catch (error) {
    console.log('something went wrong', error);
  }
}

/**
 * takeEvery: 允許並行處理
 * takeLatest: 不允許並行處理, 若同一個 action 名稱正在處理中, 那麼處理中的 action 會被取消, 只會執行當前的
 */
function* HelloSaga() {
  yield takeEvery(actionTypes.SAY_HELLO, sayHello);
}


export default HelloSaga;
