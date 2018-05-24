export const actionTypes = {
  SAY_HELLO: 'SAY_HELLO',
  // 若 saga 要 put action type 到 reducer, saga 所發的 action type 這裡也要有, 否則會進不了 reducer
  SAVE_HELLO: 'SAVE_HELLO'
};

export function sayHello() {
  // 傳至 saga 處理
  return {
    type: actionTypes.SAY_HELLO
  };
}
