import React from 'react';
import { useState } from 'react';
import * as S from '../styles/ToDoForm.styled';

const ToDoForm = (props) => {

  const {onCreateTodo} = props;
  const [text, setText] = useState('');
  
  const onChange = (e) => {
    setText(e.target.value);
  }

  const onSubmit = (e) =>{
    e.preventDefault();
    if(text === '') alert('할 일을 적어주세요');
    else {
      onCreateTodo(text);
      setText('');
    }
  };
  return (
    <S.StyledDiv>
      <S.StyledForm onSubmit={onSubmit}>
        <S.StyledInput value={text} placeholder="오늘의 할일을 적어주세요" onChange={onChange}/>
        <S.StyledRegiButton type="submit"></S.StyledRegiButton>
      </S.StyledForm>
    </S.StyledDiv>
  );
};

export default ToDoForm;