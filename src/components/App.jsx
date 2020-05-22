import React, { useState } from "react";

function App() {
  const [headingText, setText] = useState("Hello");
  const [isMountover, setMountover] = useState(false);
  function handleClick() {
    setText("Submited");
  }
  function handleMountOver() {
    console.log("Moused Over");
    setMountover(true);
  }
  function handleMountOut() {
    console.log("MOused out");
    setMountover(false);
  }
  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: isMountover && "black" }}
        onClick={handleClick}
        onMouseOver={handleMountOver}
        onMouseOut={handleMountOut}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
