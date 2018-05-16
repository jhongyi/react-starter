export const actionTypes = {
  SAY_HELLO: 'SAY_HELLO'
};

export function sayHello() {
  return (dispatch) => {
    dispatch({
      type: actionTypes.SAY_HELLO,
      word: 'welcome react redux'
    });
  };
}
