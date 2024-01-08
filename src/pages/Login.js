import Input from "../components/input";
import useInput from "../hooks/useInput";

const Login = () => {
 
  const [userInput, onChangeInput,onSubmitHandle] = useInput({

      id: '',
      pw: ''

  });

  console.log(userInput);

  return (
    <form method="post" onSubmit={onSubmitHandle}>
      <Input user={userInput}
             onChangeUserInput={onChangeInput} />
      <button type="submit">로그인</button>
    </form>
  );
};

export default Login;
