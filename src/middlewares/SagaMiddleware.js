import createSagaMiddleware from 'redux-saga';
import rootSaga from '~~sagas';

const sagaMiddleware = createSagaMiddleware();

export const runSaga = () => sagaMiddleware.run(rootSaga);
export default sagaMiddleware;
