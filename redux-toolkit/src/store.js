import { createStore } from "redux";
import { createAction, createReducer } from "@reduxjs/toolkit";

const ADD = "ADD";
const DELETE = "DELETE";

const addToDo = createAction("ADD");
const deleteToDo = createAction("DELETE");

// const reducer = (state = [], action) => {
//   switch (action.type) {
//     case addToDo.type:
//       console.log(action);
//       return [{ text: action.payload, id: Date.now() }, ...state];
//     case deleteToDo.type:
//       return state.filter((toDo) => toDo.id !== action.payload);
//     default:
//       return state;
//   }
// }

// createReducer는
// state를 mutate하거나
// 새로운 state를 리턴할 수 있다.
const reducer = createReducer([], {
  [addToDo]: (state, action) => {
    state.push({ text: action.payload, id: Date.now() });
  },
  [deleteToDo]: (state, action) => 
    state.filter((toDo) => toDo.id !== action.payload)
});

const store = createStore(reducer);

export const actionCreators = {
  addToDo,
  deleteToDo
}

export default store;