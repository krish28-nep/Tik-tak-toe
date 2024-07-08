import React from "react";
import Button from "./Button.jsx";

function App() {
  return (
    <div className="board">
      <div className="board__row">
        <Button value="1" />
        <Button value="2" />
        <Button value="3" />
      </div>
      <div className="board__row">
        <Button value="4" />
        <Button value="5" />
        <Button value="6" />
      </div>
      <div className="board__row">
        <Button value="6" />
        <Button value="6" />
        <Button value="6" />
      </div>
    </div>
  );
}

export default App;
