import React from "react";
import styled from "styled-components";

const Button = styled.button`

  margin-right: 3px;
  border: none;
  background-color: #536F01; 
  color: white; 
  cursor: pointer;
  padding:15px;
  border-radius: 3px;
  width: 50px;
`;



const PageButton = ({pageNum, setPage}) => {

 return (
  <Button onClick={()=>setPage(pageNum)}>{pageNum}</Button>
 )


}

export default PageButton;