import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import Address from "./Address.js";
import FullName from "./FullName.js";
import ProfilePhoto from "./ProfilePhoto.js";
import style from "./style.css";

function App() {
  return (
    <div className="root-element">
      <ProfilePhoto />
      <FullName />
      <Address />
    </div>
  );
}

export default App;
