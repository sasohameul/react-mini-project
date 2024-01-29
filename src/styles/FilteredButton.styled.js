import styled from "styled-components";

export const StyledButtonDiv = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const StyledButton = styled.button`
  all: unset;
  cursor: pointer;
  background-color: #5d4037;
  border: 1px solid #5d4037;
  border-radius: 15px;
  color: #F5F5DC;
  font-size: 12px;
  margin-right: 10px;
  width: 60px;
  height: 25px;
  text-align: center;
  transition: transform 0.3s ease-in-out;

  &:hover {
    background-color: #FFF;
    color: #5d4037;
    transform: translateY(-4px); 
  }
`;