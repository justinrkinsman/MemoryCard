import React from "react"
import { Title } from "./components/Title.js"
import { Gameboard } from "./components/Gameboard.js";

export function App() {
  return (
    <fieldset className="App">
      <Title />
      <Gameboard />
    </fieldset>
  );
}