import React from "react";
import { useState } from "react";

const TodoItem = (props) => {
  const { todo, onToggle } = props;

    return (
      <li
        style={{ textDecoration: todo.done ? "line-through" : "none" }}
        onClick={()=>onToggle(todo.id)}
      >
        {todo.text}
      </li>
    );
  };

const TodoList = (props) => {
  const {todo,onToggle} = props;
  return (
    <ul>
      {todo.map((todo) => 
        <TodoItem key={todo.id} onToggle={onToggle} todo={todo}/>
    )}
    </ul>
  );
};

const NewPage = (props) => {

  const {todo, onCreateTodo, onToggle} = props;
  const [text, setText] = useState('');
  
  const onChange = (e) => {
    setText(e.target.value);
  }

  const onSubmit = (e) =>{
    e.preventDefault();
    onCreateTodo(text);
    setText('');
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={text} placeholder="할일을 적어주세요" onChange={onChange}/>
        <button type="submit">등록하기</button>
      </form>
      <TodoList todo={todo} onToggle={onToggle} />
    </div>
  )

};

export default NewPage;
