import styled from 'styled-components';

export const StyledDiv = styled.div`
  margin-bottom: 15px;
`;
export const StyledInput = styled.input`
  border: none;
  border-bottom: 1px solid #191919;
  margin-right: 5px;
  width: 240px;
  padding: 3px;

  &:focus {
    outline: none;
    border-bottom: 1px solid #008080;
    border-radius: 2px;
  }
`;
export const StyledRegiButton = styled.button`
  all: unset;
  cursor: pointer;
  background-color: #008080;
  border: 1px solid #008080;
  font-size: 14px;
  color: #FFFDD0;
  width: 60px;
  height: 30px;
  text-align: center;
  border-radius: 2px;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #FFF;
    color: #008080;
  }
`;