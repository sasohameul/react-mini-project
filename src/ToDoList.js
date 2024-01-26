import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, toggleTodo } from "./reducers/todo";
import NewPage from "./NewPage";

const ToDoList = () => {

  // dispatch 를 사용하기 위한 준비
  const dispatch = useDispatch();
  // store 에 접근하여 state 가져오기 
  const todo = useSelector(state => state.todo);

  const onCreateTodo = (text) => {
    dispatch(addTodo(text));
  };

  const onToggle = (id) => {
    dispatch(toggleTodo(id));
  }

  return (
    <NewPage 
    todo={todo}
    onCreateTodo={onCreateTodo}
    onToggle={onToggle}/>
  )
};

export default ToDoList;