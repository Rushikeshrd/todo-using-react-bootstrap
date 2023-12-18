import "./App.css";
import TodoInput from "./Components/TodoInput";
import { useState } from "react";
import TodoList from "./Components/TodoList";

function App() {
  const [listTodo, setlistTodo] = useState([]);
  let addList = (inputText) => {
    if (inputText !== "") setlistTodo([...listTodo, inputText]);
  };

  const deleteItem = (key) => {
    let newListTodo = [...listTodo];
    newListTodo.splice(key, 1);
    setlistTodo([...newListTodo]);
  };

  return (
    <div className="">
      <TodoInput addList={addList} />
      {listTodo.map((listItem, i) => {
        return (
          <TodoList key={i} index={i} item={listItem} deleteItem={deleteItem} />
        );
      })}
    </div>
  );
}

export default App;
