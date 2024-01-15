import React, { Fragment } from "react";
import styled from "styled-components";

const InputInfo = styled.input`

  display: flex; 
  flex-direction: column;
  align-items: center;
  border: none;
  border-bottom: 1px solid #536F01;
  border-radius: 8px;
  width: 200px;
  margin-bottom: 10px;
  padding:8px;
  font-size: 15px;

  &:focus {

    outline:none;
    background-color: white;

  }

  //자동완성 키워드 선택 시 변하는 배경색 제어
  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 30px white inset !important;
    -webkit-text-fill-color: black !important;
  }

`;


const Input = ({user,onChangeUserInput}) => {

  return (
    <Fragment>
      
      {INPUT_DATA.map((data,idx) => <InputInfo key={idx}
                                       type={data.type}
                                       name={data.name}
                                       placeholder={data.placeholder}
                                       value={data.name === "id" ? user.id : user.pw}
                                       onChange={onChangeUserInput}/>)}
    </Fragment>
  );
  
};
//input 태그 속성
const INPUT_DATA =[
  {
    id: 1,
    type: "text",
    name: "id",
    placeholder: "ID"
  },
  {
    id: 2,
    type: "password",
    name: "pw",
    placeholder: "PASSWORD"
  }
];

export default Input;