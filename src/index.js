import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

const DATA = [
  { name: "Risotto", description: "Rice", cookTime: 90 },
  { name: "Mac n Cheese", description: "Pasta", cookTime: 60 },
  { name: "Chickpea Dahl", description: "Curry", cookTime: 45 },
];

ReactDOM.render(
  <React.StrictMode>
    <App recipeList = {DATA}/>
  </React.StrictMode>,
  document.getElementById("root")
);
