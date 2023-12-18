import React, { useState } from "react";

const TodoInput = (props) => {
  const [inputText, setInputText] = useState("");

  return (
    <div
      className="container my-5 rounded"
      style={{ width: "600px", backgroundColor: "#427D9D" }}
    >
      <div className="mx-auto rounded  p-4 d-flex align-items-center justify-content-center flex-column">
        <h2 className="text-white text-center mb-4 ">My Todo List</h2>
        <div className="d-flex align-items-center justify-content-center gap-3 text-white">
          <input
            className="d-flex align-items-center justify-content-center rounded border-0 input-lg"
            style={{ width: "400px" }}
            type="text"
            value={inputText}
            placeholder="Enter your Todo"
            onChange={(e) => {
              setInputText(e.target.value);
            }}
          />
          <button
            className="btn btn-sm btn-primary rounded-right"
            onClick={() => {
              props.addList(inputText);
              setInputText("");
            }}
          >
            Add Task
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoInput;
