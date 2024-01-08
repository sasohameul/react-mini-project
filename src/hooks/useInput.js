import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useInput = (initialValue) => {

  const [inputValue, setInputValue] = useState(initialValue);

  const onChangeUserInput = (e) =>{

    const {name, value} = e.target;

    setInputValue((prev)=>({

      ...prev,
      [name]: value
    }));

  };

  const navigate = useNavigate();

  //로그인 버튼 클릭 + 엔터키
  const onSubmitHandle = (e) => {

    console.log(inputValue.id);
    console.log(e);
    
    e.preventDefault();

    if(inputValue.id === 'yj' && inputValue.pw === 'yj') navigate('/main');
    else {
      alert('아이디 혹은 비밀번호를 확인해 주세요');
      setInputValue({
        id: '',
        pw: ''
      });

    }

  }
  
  return [inputValue, onChangeUserInput, onSubmitHandle];

};

export default useInput;