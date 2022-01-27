import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import "./utilities.css";

function App() {
  const [id, setId] = useState("-");
  return (
    <div className="App">
      <header className="App-header">ST Mobile uuidv4 code generator</header>
      <div className="flex justify-center">
        <h2 className="margin-xlarge white">{id}</h2>
      </div>
      <button className="button margin-small" onClick={() => setId(uuidv4())}>
        generate a new uuidv4 code
      </button>
      <button
        className="button margin-small"
        onClick={() => {
          navigator.clipboard.writeText(id);
        }}
      >
        copy to clipboard
      </button>
    </div>
  );
}

export default App;
