const ADD_TODO = "TODO/ADD_TODO";
const TOGGLE_TODO = "TODO/TOGGLE_TODO";
const REMOVE_TODO = "TODO/REMOVE_TODO";

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

//remove_todo action 정의
export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  id,
});

//초기값
const initializeState = [];

//state와 action을 받는 reducer 함수 작성
export const todo = (state = initializeState, action) => {
  switch (action.type) {
    case ADD_TODO:
      if(state.length > 4) {
        alert("오늘의 할일을 5개로 줄여보세요 !");
        return state;
      }
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
      case REMOVE_TODO:
        return state.filter((todo) =>todo.id !== action.id);

    default:
      return state;
  }
};
