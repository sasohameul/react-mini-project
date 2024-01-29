import styled from "styled-components";

export const StyledList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;

export const StyledLi = styled.li`
  margin-bottom: 5px;
  text-decoration: ${(props) => (props.done ? "line-through" : "none")};
`;

export const StyledXbutton = styled.button`
  all: unset;
  cursor: pointer;
  color: red;
  width: 11px;
  height: 10px;
  text-align: center;
  border: 1px solid red;
  border-radius: 40%;
  font-size: 13px;
  line-height: 11px;

  &:focus {
    background-color: red;
    color: #fff;
  }
`;