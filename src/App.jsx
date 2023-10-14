import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  const [uncompleteTodos, setUncompleteTodos] = useState(["ああああ", "いいいい"]);
  const [completeTodos, setCompleteTodos] = useState(["うううう"])
  return (
    <>
       <div className="input-area">
        <input type="text" placeholder="TODOを入あああ力" />
        <button>追加</button>
       </div>
       <div className="uncomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {uncompleteTodos.map((todo) => {
            return (
              <div key={todo} className="todo">
                <li>{todo}</li>
                <button>完了</button>
                <button>削除</button>
              </div>     
            )
          })}
        </ul>
       </div>
       <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          {completeTodos.map((todo) => {
            return (
              <div key={todo} className="todo">
                <li>{todo}</li>
                <button>戻す</button>
              </div>
            )
          })}
        </ul>
       </div>
    </>
  );
};