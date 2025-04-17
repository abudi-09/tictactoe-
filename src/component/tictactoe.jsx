 import React from "react";
import "./tictactoe.css";
 import circle_icon from "..assets/assets/circle.png";
import cross_icon from "..assets/assets/cross.png";
let data = ["", "", "", "", "", "", "", "", ""];
export const tictactoe = () => {
  let [count, setcount] = usestate(0);

  let [lock, setlock] = usestate(false);
  const toggle = (e, num) => {
    if (lock) {
      return 0;
    }
    if (count % 2 == 0) {
      e.target.innerHTML = "<img src ${cross_icon}>";
      data[num] = "x";
      setcount(++count);
    } else {
      e.target.innerHTML = "<img src ${cricle_icon}>";
      data[num] = "o";
      setcount(++count);
    }
  };
  const checkwin = () => {
    if (data[0] == data[1] && data[1] == data[2] && data[2] == "") {
      Won(data);
    }
  };

  return (
    <div className="container">
      <h1 className="title">
        Tictactoe in <span>reactjs </span>
      </h1>
      <div className="board">
        <div className="row1">
          <div
            className="boxes"
            onClick={(e) => {
              toggle(e, 0);
            }}
          ></div>
          <div
            className="boxes"
            onClick={(e) => {
              toggle(e, 1);
            }}
          ></div>
          <div
            className="boxes"
            onClick={(e) => {
              toggle(e, 2);
            }}
          ></div>
        </div>
        <div className="row2">
          <div
            className="boxes"
            onClick={(e) => {
              toggle(e, 3);
            }}
          ></div>
          <div
            className="boxes"
            onClick={(e) => {
              toggle(e, 4);
            }}
          ></div>
          <div
            className="boxes"
            onClick={(e) => {
              toggle(e, 5);
            }}
          ></div>
        </div>
        <div className="row3">
          <div
            className="boxes"
            onClick={(e) => {
              toggle(e, 6);
            }}
          ></div>
          <div
            className="boxes"
            onClick={(e) => {
              toggle(e, 7);
            }}
          ></div>
          <div
            className="boxes"
            onClick={(e) => {
              toggle(e, 8);
            }}
          ></div>
        </div>
      </div>
      <button className="reset">reset</button>
    </div>
  );
};
