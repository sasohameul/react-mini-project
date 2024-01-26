export const INCREASE = "COUNT/INCREASE"; 
export const DECREASE = "COUNT/DECREASE"; 

export const increaseCount = (count) => ({ 
  type: INCREASE, 
  count,
});

export const decreaseCount = (count) => ({ 
  type: DECREASE,
});

const initialState = {
  count: 0,
};

const counter = (state = initialState, action) => { 
  switch (action.type) {
    case INCREASE: 
      return {
        ...state,
        count: state.count + 1,
      };

    case DECREASE: 
      return {
        ...state,
        count: state.count - 1,
      };

    default:
      return state;
  }
};

export default counter; 
