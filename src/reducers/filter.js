export const SET_FILTER = "FILTER/SET_FILTER";

export const FILTERS = {

  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_ING: "SHOW_ING",
}

export const setFilter = (filter) => ({
  
  type: SET_FILTER,
  filter
  
});

const initializeState = FILTERS.SHOW_ALL;

export const filter = (state=initializeState, action) => {

  switch (action.type) {
    case SET_FILTER:
      
      return action.filter;
  
    default:
      return state;
  }

};