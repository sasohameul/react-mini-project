import React from "react";
import { useDispatch,useSelector } from "react-redux";
import { increaseCount,decreaseCount } from "./reducers/counter";
import { useNavigate } from "react-router-dom";

const App = () => {

const {count} = useSelector((state) => state.counter);

const dispatch = useDispatch();

const navigate = useNavigate();

const increase = () => {
dispatch(increaseCount());

};

const decrease = () => {
  dispatch(decreaseCount());
}

return (
<div>
  {count}
  <button onClick={increase}>증가</button>
  <button onClick={decrease}>감소</button>
  <button onClick={() => navigate('/NewPage')}>이동하기</button>
</div>

)
}

export default App;