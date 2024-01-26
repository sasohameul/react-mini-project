const ADD_TODO = "TODO/ADD_TODO";
const TOGGLE_TODO = "TODO/TOGGLE_TODO";

let nextId = 1;
//add_todo action 정의
export const addTodo = (text) => ({
  type: ADD_TODO,
  todo: {
    id: nextId++,
    text,
  },
});
//toggle_todo action 정의
export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  id,
});

//초기값
const initializeState = [];

//state와 action을 받는 reducer 함수 작성
export const todo = (state = initializeState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return state.concat(action.todo);

    case TOGGLE_TODO:
      return state.map((todo) =>
        todo.id === action.id
          ? {
              ...todo,
              done: !todo.done,
            }
          : todo
      );

    default:
      return state;
  }
};
