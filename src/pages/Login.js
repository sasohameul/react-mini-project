import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  //id + pw 입력 상태관리
  const [userInput, setUserInput] = useState({
    id: '',
    pw: '',
  });

  //id와 pw 입력창
  const onChangeUserInput = (e) => {
    const { value, name } = e.target;
    console.log(e.target.name);
    console.log(e.target.value);
    setUserInput({
      ...userInput,
      [name]: value,
    });
  };

  const navigate = useNavigate();

  //로그인 버튼 클릭 시
  const onClickLogin = () => {

    if(userInput.id === 'yj' && userInput.pw === 'yj') navigate('/main');
    else {
      alert('아이디 혹은 비밀번호를 확인해 주세요');
      setUserInput({
        id: '',
        pw: ''
      });

    }

  }

  return (
    <div>
      <input
        name="id"
        placeholder="id"
        value={userInput.id}
        onChange={onChangeUserInput}
      />
      <input
        type="password"
        name="pw"
        placeholder="pw"
        value={userInput.pw}
        onChange={onChangeUserInput}
      />

      <button onClick={onClickLogin}>로그인</button>
    </div>
  );
};

export default Login;
