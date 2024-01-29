import React from "react";
import ToDoForm from "./components/ToDoForm";
import FilteredButton from "./components/FilteredButton";

const TodoItem = (props) => {
  const { todo, onToggle } = props;

  return (
    <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", verticalAlign:"middle", marginBottom:"8px"}}>
      <li
        style={{
          textDecoration: todo.done ? "line-through" : "none",
          marginBottom: "5px",
        }}
        onClick={() => onToggle(todo.id)}
      >
        {todo.text}
      </li>
    </div>
  );
};

const TodoList = (props) => {
  const { filteredTodo, onToggle } = props;

  return (
    <ul style={{ height: "300px" }}>
      {filteredTodo.map((todo) => (
        <TodoItem key={todo.id} onToggle={onToggle} todo={todo} />
      ))}
    </ul>
  );
};

const NewPage = (props) => {
  const { todo, onCreateTodo, onToggle, filteredTodo } = props;

  return (
    <div>
      <FilteredButton />
      <ToDoForm onCreateTodo={onCreateTodo} />
      <TodoList todo={todo} onToggle={onToggle} filteredTodo={filteredTodo} />
    </div>
  );
};

export default NewPage;
