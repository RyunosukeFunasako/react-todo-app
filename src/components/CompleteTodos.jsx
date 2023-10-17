import React from "react";

export const CompleteTodos = (props) => {
  const { completeTodos, onClickReturnButton } = props;
  return (
    <div className="complete-area">
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
