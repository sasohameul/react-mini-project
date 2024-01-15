import React, { useState } from "react";
import styled from "styled-components";

const Button = styled.button`

  margin-right: 3px;
  border: none;
  background-color: #536F01; 
  color: white; 
  cursor: pointer;
  padding:15px;
  border: 1px solid #536F01;
  border-radius: 3px;
  width: 50px;

  &:hover {

    background-color: white;
    color: black;
    border: 1px solid #536F01;

  }

  &:active,
  &:focus {

    background-color: white;
    color: black;
    border: 1px solid #536F01;

  }
`;



const PageButton = ({pageNum, setPage}) => {

 return (
  <Button onClick={()=>{setPage(pageNum)}}>{pageNum}</Button>
 )


}

export default PageButton;