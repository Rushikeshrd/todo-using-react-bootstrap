import React from "react";

const TodoList = (props) => {
  return (
    <div
      className="container rounded"
      style={{ width: "600px", height: "auto", backgroundColor: "#DDF2FD" }}
    >
      <ol className="list-group list-group">
        <li
          className="d-flex justify-content-between list-group-item list-group-item text-white"
          style={{ backgroundColor: "#9BBEC8" }}
        >
          {props.item}
          <span>
            <i
              className="fa-solid fa-trash align-items-right"
              style={{ cursor: "pointer" }}
              onClick={() => {
                props.deleteItem(props.index);
              }}
            ></i>
          </span>
        </li>
      </ol>
    </div>
  );
};

export default TodoList;
