import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo, toggleTodo } from "../reducers/todo";
import { FILTERS } from "../reducers/filter";
import NewPage from "../NewPage";

const ToDoList = () => {

  // dispatch 를 사용하기 위한 준비
  const dispatch = useDispatch();
  // store 에 접근하여 state 가져오기 
  const todo = useSelector(state => state.todo);
  const filter = useSelector(state => state.filter);

  const onCreateTodo = (text) => {
    dispatch(addTodo(text));
  };

  const onToggle = (id) => {
    dispatch(toggleTodo(id));
  }

  const onDeleteTodo = (id) => {
    dispatch(removeTodo(id));
  }

  const onFilteredTodo = () => {
    switch (filter) {

      case FILTERS.SHOW_COMPLETED:
        return todo.filter((item) => item.done);
      case FILTERS.SHOW_ING:
        return todo.filter((item) => !item.done);

      default:
        return todo;
    }
  };

const filteredTodo = onFilteredTodo();

  return (
    <NewPage 
    todo={todo}
    filter={filter}
    onCreateTodo={onCreateTodo}
    onToggle={onToggle}
    onDeleteTodo={onDeleteTodo}
    filteredTodo={filteredTodo}/>
  )
};

export default ToDoList;