export interface Todo {
  id: number;
  todo: string;
  isDone: boolean;
}
// This Todo is an object and it will be nested in an array

//actions includes three things
/*
type Actions =
  | { type: "add"; payload: string }
  | { type: "remove"; payload: number }
  | { type: "done"; payload: number };

const TodoReducer = (state: Todo[], action: Actions) => {
  switch (action.type) {
    case "add":
      return [
        ...state,
        { id: Date.now(), todo: action.payload, isDone: false },
      ];
    case "remove":
      return state.filter((todoObj) => todoObj.id !== action.payload);
    case "done":
      return state.map((todoObj) =>
        todoObj.id !== action.payload
          ? { ...todoObj, isDone: !todoObj.isDone }
          : todoObj
      );
    default:
      return state;
  }
};

import React, { useReducer } from "react";
const ReducerExample = () => {
  const [state, dispatch] = useReducer(TodoReducer, []);

  return <div>Hello</div>;
};

export default ReducerExample;
*/
