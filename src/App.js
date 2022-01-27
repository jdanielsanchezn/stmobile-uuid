import React, { useState } from "react";
import { v4 as uuidv4, validate } from "uuid";
import "./App.css";
import "./utilities.css";

function App() {
  const [id, setId] = useState("-");
  const [inputId, setInputId] = useState(null);
  const [isValid, setIsValid] = useState(null);

  const validateInputId = (id) => {
    const isValid = validate(id);
    setIsValid(isValid);
  };

  const isValidVisual = () => {
    if (isValid === null) return null;

    return !!isValid ? `👍🏽` : `👎🏽`;
  };

  return (
    <div className="App flex column">
      <header className="App-header">ST Mobile uuidv4 code generator</header>
      <div className="flex justify-center">
        <h2 className="margin-xlarge white">{id}</h2>
      </div>
      <div>
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

      <div className="flex justify-center margin-large align-center">
        <input
          className="input"
          value={inputId}
          onChange={(event) => setInputId(event.target.value)}
        />
        <button
          className="button margin-small"
          onClick={() => {
            validateInputId(inputId);
          }}
        >
          validate
        </button>

          <p className="font-large">
            {isValidVisual()}
          </p>
      </div>
    </div>
  );
}

export default App;
