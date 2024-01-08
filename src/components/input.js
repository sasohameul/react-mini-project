import React, { Fragment } from "react";

const Input = ({user,onChangeUserInput}) => {

  return (
    <Fragment>
      {INPUT_DATA.map((data) => <input key={data.key}
                                       type={data.type}
                                       name={data.name}
                                       placeholder={data.placeholder}
                                       value={data.name === "id" ? user.id : user.pw}
                                       onChange={onChangeUserInput}/>)}
    </Fragment>
  );
  
};
//input 태그 속성
const INPUT_DATA =[
  {
    id: 1,
    type: "text",
    name: "id",
    placeholder: "id"
  },
  {
    id: 2,
    type: "password",
    name: "pw",
    placeholder: "pw"
  }
];

export default Input;