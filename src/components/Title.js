import React from "react";
import * as S from "../styles/Title.styled";

const Title = () => {
  return (
    <S.StyledTitleArea>
      <S.StyledTitle>O'neulDal</S.StyledTitle>
      <S.StyledSubTitle>
        오늘, 5개의 목표를 달성합니다.
      </S.StyledSubTitle>
    </S.StyledTitleArea>
  );
};

export default Title;
