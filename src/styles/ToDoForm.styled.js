import styled from 'styled-components';

export const StyledDiv = styled.div`
  margin-bottom: 15px;
`;

export const StyledForm = styled.form`
  display: flex;
  align-items: center;
`;

export const StyledInput = styled.input`
  border: none;
  border-bottom: 1px solid #f5a74b;
  margin-right: 5px;
  width: 240px;
  padding: 3px;
  text-align: center;

  &:focus {
    outline: none;
    border-bottom: 2px solid #f5a74b;
    border-radius: 2px;
  }
`;
export const StyledRegiButton = styled.button`
  all: unset;
  cursor: pointer;
  background: url('${process.env.PUBLIC_URL}/assets/plus.png') no-repeat;
  background-position: center right;
  background-size: contain;
  color: #FFFDD0;
  width: 30px;
  height: 30px;
  text-align: center;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #FFF;
    color: #008080;
  }
`;