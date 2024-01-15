import React, { Fragment } from "react";
import styled from "styled-components";

const InputInfo = styled.input`

  display: flex; 
  flex-direction: column;
  justify-contnet: center;
  align-items: center;
  border: none;
  border-bottom: 1px solid black;
  width: 200px;
  margin-bottom: 20px;
  padding:8px;
  font-size: 17px;

  &:focus {

    outline:none;
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
    placeholder: "id"
  },
  {
    id: 2,
    type: "password",
    name: "pw",
    placeholder: "pw"
  }
];

export default Input;