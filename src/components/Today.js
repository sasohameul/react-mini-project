import React from 'react';
import styled from 'styled-components';

const StyledDate = styled.p`
color: olive;
/* darkseagreen */
font-size: 13px;
font-weight: 600;
margin-bottom: 7px;
}
`;

const Today = () => {

  const getCurrentTimeFormatted = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, "0");
    const day = now.getDate().toString().padStart(2, "0");
    const dayToKorean = ['월', '화', '수', '목', '금', '토', '일'];

    return `${year}년 ${month}월 ${day}일 ${dayToKorean[now.getDay()-1]}요일`;
  };
  
  return (
    <StyledDate>{getCurrentTimeFormatted()}</StyledDate>
  );
};

export default Today;