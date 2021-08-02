import { ADD_COUNT, REMOVE_COUNT, RESET } from "./actionType.js";
const insial = {
  count: 0
};
export const ReducerFunction = (state = insial, { type, payload }) => {
  switch (type) 
  {
    case ADD_COUNT:
      return { ...state, count: state.count + payload };
    case REMOVE_COUNT:
    return { ...state, count: state.count - payload };

    case RESET:
    return { ...state, count: 0 };
    default:
      return state;
  }
};
