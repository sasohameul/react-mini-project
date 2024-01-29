import React from "react";
import ToDoForm from "./components/ToDoForm";
import FilteredButton from "./components/FilteredButton";
import * as S from "./styles/TodoItem.styled";
import styled from "styled-components";

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
  const { todo, onToggle, onDeleteTodo } = props;

  const onToggleHandler = (e, id) => {
    e.stopPropagation();
    onToggle(id);
  };

  const onDeleteHandler = (e, id) => {
    e.stopPropagation();
    onDeleteTodo(id);
  };

  return (
    <S.StyledList>
      <S.StyledLi done={todo.done} onClick={(e) => onToggleHandler(e, todo.id)}>
        {todo.text}
      </S.StyledLi>
      <S.StyledXbutton type="button" onClick={(e) => onDeleteHandler(e, todo.id)}>
        x
      </S.StyledXbutton>
    </S.StyledList>
  );
};

const TodoList = (props) => {
  const { filteredTodo, onToggle, onDeleteTodo } = props;

  return (
    <StyledUl>
      {filteredTodo.map((todo) => (
        <TodoItem
          key={todo.id}
          onToggle={onToggle}
          todo={todo}
          onDeleteTodo={onDeleteTodo}
        />
      ))}
    </StyledUl>
  );
};

const NewPage = (props) => {
  const { todo, onCreateTodo, onToggle, onDeleteTodo, filteredTodo } = props;

  const remainingTodo = todo.filter(item => !item.done).length;
  return (
    <StyledBack>
      <div style={{display: "flex", flexDirection:"column", alignItems:"center", marginBottom:"30px"}}>
      <h1 style={{color:"#5d4037"}}>O'neulDal</h1>
      <p style={{fontSize:"10px", color: "#f5a74b"}}>오늘의 목표를 달성합니다.</p>
      </div>
      <FilteredButton />
      <ToDoForm onCreateTodo={onCreateTodo} />
      <TodoList
        todo={todo}
        onToggle={onToggle}
        filteredTodo={filteredTodo}
        onDeleteTodo={onDeleteTodo}
      />
    <StyledP>남은 할 일: {remainingTodo}</StyledP>
    </StyledBack>
  );
};

export default NewPage;
