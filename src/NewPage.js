import React from "react";
import ToDoForm from "./components/ToDoForm";
import FilteredButton from "./components/FilteredButton";
import * as S from "./styles/TodoItem.styled";
import styled from "styled-components";
import Today from "./components/Today";
import Title from "./components/Title";

const StyledBack = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledUl = styled.ul`
list-style: none;
font-size: 13px;
height: 220px;
width: 320px;
border-radius: 22px;
padding: 40px;
box-shadow: inset -5px -11px 21px -27px #666, 
            inset 0px -4px 13px -6px #666;
margin-bottom: 12px;      
`;

const StyledP = styled.p`
color: #f5a74b;
font-size: 13px;
font-weight: 700;
`;

const TodoItem = (props) => {
  const { todo, onToggle, onDeleteTodo, onDragStart, onDragOver, onDrop, onDragEnd, onDragLeave} = props;

  const onToggleHandler = (e, id) => {
    e.stopPropagation();
    onToggle(id);
  };

  const onDeleteHandler = (e, id) => {
    e.stopPropagation();
    onDeleteTodo(id);
  };



  return (
    <S.StyledList draggable="true" onDragStart={(e)=>onDragStart(e, todo.id)} data-id={todo.id}
                            onDragOver={onDragOver}
                            onDrop={(e)=>onDrop(e, todo.id)}
                            onDragEnd={onDragEnd}
                            onDragLeave={onDragLeave}>
      <S.StyledLi $done={todo.done} onClick={(e) => onToggleHandler(e, todo.id)}>
        {todo.text}
      </S.StyledLi>
      <S.StyledXbutton type="button" onClick={(e) => onDeleteHandler(e, todo.id)}>
        x
      </S.StyledXbutton>
    </S.StyledList>
  );
};

const TodoList = (props) => {
  const { filteredTodo, onToggle, onDeleteTodo,onDragNDrop } = props;

  const handleDragStart = (e, id) => {
    e.dataTransfer.setData("id", id.toString());
    const currentElement = e.currentTarget;
    currentElement.style.color = "darkgrey";
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    const currentElement = e.currentTarget;
    currentElement.style.borderBottom = "2px solid darkgrey";
    currentElement.style.boxShadow = "0px 4px 2px -2px rgba(0, 0, 0, 0.4)";
    currentElement.style.borderRadius = "4px";
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const draggedId = parseInt(e.dataTransfer.getData("id"), 10);
    const droppedId = parseInt(e.currentTarget.getAttribute('data-id'), 10);
    onDragNDrop(draggedId, droppedId);
    const currentElement = e.currentTarget;
    currentElement.style.borderBottom = "";
    currentElement.style.boxShadow = "";
    currentElement.style.borderRadius = "";
  };

  const handleDragLeave = (e) => {
    const currentElement = e.currentTarget;
    currentElement.style.borderBottom = "";
    currentElement.style.boxShadow = "";
    currentElement.style.borderRadius = "";
  }

  const handleDragEnd = (e) => {
    const currentElement = e.currentTarget;
    currentElement.style.borderBottom = "";
    currentElement.style.boxShadow = "";
    currentElement.style.borderRadius = "";
  };


  return (
    <StyledUl>
      {filteredTodo.map((todo) => (
        <TodoItem
          key={todo.id}
          onToggle={onToggle}
          todo={todo}
          onDeleteTodo={onDeleteTodo}
          onDragStart={handleDragStart}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          onDragEnd={handleDragEnd}
          onDragLeave={handleDragLeave}
        />
      ))}
    </StyledUl>
  );
};

const NewPage = (props) => {
  const { todo, onCreateTodo, onToggle, onDeleteTodo, filteredTodo, onDragNDrop } = props;

  const remainingTodo = todo.filter(item => !item.done).length;

  return (
    <StyledBack>
      <Title />
      <FilteredButton />
      <ToDoForm onCreateTodo={onCreateTodo} />
      <Today />
      <TodoList
        todo={todo}
        onToggle={onToggle}
        filteredTodo={filteredTodo}
        onDeleteTodo={onDeleteTodo}
        onDragNDrop={onDragNDrop}
      />
    <StyledP>남은 할 일: {remainingTodo}</StyledP>
    </StyledBack>
  );
};

export default NewPage;
