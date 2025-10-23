import "./AddTodo.css";
import { useRef } from "react";

import { postTodo } from "../../api/api.mjs";

function AddTodo() {
  const inputRef = useRef();

  async function handleClick() {
    await postTodo(inputRef.current.value);
  }

  return (
    <section className="add-todo">
      <input type="text" className="add-todo__input" ref={inputRef} />
      <button className="add-todo__button" onClick={handleClick}>
        Lägg till todo
      </button>
    </section>
  );
}

export default AddTodo;
