import React from "react";
import { useDispatch } from "react-redux";
import { FILTERS, setFilter } from "../reducers/filter";
import * as S from '../styles/FilteredButton.styled';

const FilteredButton = () => {
  const dispatch = useDispatch();

  return (
    <S.StyledButtonDiv>
      <S.StyledButton
        type="button"
        onClick={() => dispatch(setFilter(FILTERS.SHOW_ALL))}
      >
        전체
      </S.StyledButton>
      <S.StyledButton
        type="button"
        onClick={() => dispatch(setFilter(FILTERS.SHOW_ING))}
      >
        진행 중
      </S.StyledButton>
      <S.StyledButton
        type="button"
        onClick={() => dispatch(setFilter(FILTERS.SHOW_COMPLETED))}
      >
        완료
      </S.StyledButton>
    </S.StyledButtonDiv>
  );
};

export default FilteredButton;
