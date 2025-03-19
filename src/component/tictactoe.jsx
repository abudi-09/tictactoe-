import React from "react";
import "./tictactoe.css";
import circle_icon from "../assets/circle.png";
import cross_icon from "../assets/cross.png";

export const tictactoe = () => {
  return (
    <div className="container">
      <h1 className="title">
        Tictactoe in <span>reactjs </span>
      </h1>
      <div className="board">
        <div className="row1">
          <div className="boxes"></div>
          <div className="boxes"></div>
          <div className="boxes"></div>
        </div>
        <div className="row2">
          <div className="boxes"></div>
          <div className="boxes"></div>
          <div className="boxes"></div>
        </div>
        <div className="row3">
          <div className="boxes"></div>
          <div className="boxes"></div>
          <div className="boxes"></div>
        </div>
      </div>
      <button className="reset">reset</button>
    </div>
  );
};
