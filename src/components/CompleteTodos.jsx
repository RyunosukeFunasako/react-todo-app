import React from "react";

const style = {
  backgroundColor: "violet",
  width: "400px",
  minHeight: "200px",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px",
};

export const CompleteTodos = (props) => {
  const { completeTodos, onClickReturnButton } = props;
  return (
    <div style={style}>
      <p className="title">完了のTODO</p>
      <ul>
        {completeTodos.map((todo, index) => {
          return (
            <div key={todo} className="todo">
              <li>{todo}</li>
              <button onClick={() => onClickReturnButton(index)}>戻す</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
