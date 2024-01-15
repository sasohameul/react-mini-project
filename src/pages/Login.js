import styled from "styled-components";
import Input from "../components/input";
import useInput from "../hooks/useInput";


const Form = styled.form`

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 80px;
  background-color: #fafff37d;
  border-radius: 20px;
  height: 40%;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 
              0 3px 6px rgba(0,0,0,0.23);


`;

const LoginButton = styled.button`

  all: unset;
  width: 186px;
  background-color: #536F01;
  color: white;
  padding: 8px;
  border: 1px solid #536F01;
  border-radius: 10px;
  text-align: center;
  cursor: pointer;
  margin-top: 3px;

  &:hover {

    background-color: white;
    color: #536F01;
    border: 1px solid #536F01;

  }

 
`;

const SignIn = styled.div`

  font-size: 20px;
  margin-bottom: 30px;

`;

const Login = () => {
 
  const [userInput, onChangeInput,onSubmitHandle] = useInput({

      id: '',
      pw: ''

  });

  console.log(userInput);

  return (
    <Form method="post" onSubmit={onSubmitHandle}>
      <SignIn>Sign in</SignIn>
      <Input user={userInput}
             onChangeUserInput={onChangeInput} />
      <LoginButton type="submit">로그인</LoginButton>
    </Form>
  );
};

export default Login;
