import { createStore } from "redux";


const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const createToDo = (text) => {
  return { type: ADD_TODO, text };
}

const deleteToDo = (id) => {
  return { type: DELETE_TODO, id };
};

const reducer = (state = [], action) => {
  console.log(state, action);
  switch(action.type) {
    case ADD_TODO:
      return [{ text: action.text, id: Date.now() }, ...state];
    case DELETE_TODO:
      return state.filter(toDo => toDo.id !== action.id);
    default:
      return state;
  }
}

const store = createStore(reducer);

store.subscribe(() => console.log(store.getState()));

const dispatchCreateToDo = (toDo) => {
  store.dispatch(createToDo(toDo));
};

const dispatchDeleteToDo = (e) => {
 const id = parseInt(e.target.parentNode.id, 10);
 store.dispatch(deleteToDo(id));
}

const paintToDos = () => {
  const toDos = store.getState();
  ul.innerHTML = "";
  toDos.forEach(toDo => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.innerText = "DEL";
    btn.addEventListener("click", dispatchDeleteToDo);
    li.id = toDo.id;
    li.innerText = toDo.text;
    ul.appendChild(li);
    li.appendChild(btn);
  })
}
store.subscribe(paintToDos);

const onSubmit = (e) => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  dispatchCreateToDo(toDo);
}

form.addEventListener("submit", onSubmit);


