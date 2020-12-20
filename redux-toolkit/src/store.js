import { configureStore, createSlice } from "@reduxjs/toolkit";

// createReducer는
// state를 mutate하거나
// 새로운 state를 리턴할 수 있다.
const toDos = createSlice({
  name: 'toDosReducer',
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push({ text: action.payload, id: Date.now() });
    },
    remove: (state, action) => 
      state.filter((toDo) => toDo.id !== action.payload)
  }
})

// 미들웨어와 store 함께 생성
const store = configureStore({reducer: toDos.reducer});

console.log(toDos.actions);

export const { add,remove } = toDos.actions;

export default store;