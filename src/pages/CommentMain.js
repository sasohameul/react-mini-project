import React, { Fragment, useState } from "react";
import styled from "styled-components";
import emptyHeart from "../assets/empty_heart.png";
import fullHeart from "../assets/full_heart.png";

const CommentWrap = styled.div`
display: flex;
align-items: center;
margin-top: 10px;
`
const Comment = styled.div`

margin: 20px;

`

const CommentText = styled.div`

  margin: 0 10px 0;
`;
const HeartImg = styled.img`
  width: 15px;
  padding: 3px;
  `;

const CommentNum = styled.div`

  font-size: 12px;

`

  
  const Main = () => {
    //기존 댓글
    const [commentArray, setCommentArray] = useState([]);
    //새로운 댓글 등록
    const [comment, setComment] = useState("");
  
    //하트
    const [heartArray, setHeartArray] = useState([]);
    
    //하트 개수 카운팅
    const [heartCnt, setHeartCnt] = useState(0);

  //댓글과 하트상태 등록하기
  const onClickRegist = () => {
    const newCommentArray = [...commentArray];
    const newHeartArray = [...heartArray,true]; //true 면 empty heart

    newCommentArray.push(comment);
    setCommentArray(newCommentArray);
    setComment("");

    setHeartArray(newHeartArray);
  };

  
  //좋아요 누르기 + 취소하기
  const onClickHeart = (idx) => {
    
    const newHeartArray = [...heartArray];
    newHeartArray[idx] = !newHeartArray[idx];
    setHeartArray(newHeartArray);
    setHeartCnt((heartCnt) => (newHeartArray[idx] ? heartCnt-1 : heartCnt+1));
    
    // const total = heartArray.reduce((prev,cur,idx,arr)=>{
      
    //   let empty = 0;
    //   for(let i = 0; i < arr.length; i++){
        
    //     if(arr[i]) empty++;
        
    //   };

    //   return commentArray.length - empty;
    // },0);
    
    // console.log(heartCnt);
    // console.log(heartArray.length);
    
    //   setHeartCnt(total);
    // 이 방법으로하니까 자꾸 실제 좋아요 수랑 콘솔로 찍힌 좋아요 수 차이가 났다.. 

 
  }

  //댓글 입력 시 엔터로도 등록하게끔
  const enterKeyHandler = (e) =>{
    
    if(e.key === 'Enter') onClickRegist();
    
  }

  return (
    <Comment>
      <input
        value={comment}
        placeholder="댓글을 입력하세요"
        onChange={(e) => setComment(e.target.value)}
        onKeyPress={enterKeyHandler} //onKeyDown으로 하니까 한글로 입력할 때, 한글자 더 등록되는 오류 발생함...
      />
      <button onClick={onClickRegist}>등록</button>
      <CommentNum>
        <span>
        댓글
        </span>
        <span>
          {commentArray.length}개
        </span>
      </CommentNum>
      <CommentNum>
        <span>
        좋아요
        </span>
        <span>
          {heartCnt}개
        </span>
      </CommentNum>
      {commentArray.map((data,idx) => {
        return (
          <Fragment key={idx}>
            <CommentWrap >
              <CommentText>{data}</CommentText>
              <HeartImg src={heartArray[idx] ? emptyHeart : fullHeart} alt="" onClick={()=>onClickHeart(idx)} />
            </CommentWrap>
          </Fragment>
        );
      })}
    </Comment>
  );
};

export default Main;
