import React, { useEffect, useState } from "react";
import { load } from "web-component-load";
import "./App.css";

function App() {
  const [reactInputValue, setReactInputValue] = useState("");
  const [angularInputValue, setAngularInputValue] = useState("");

  useEffect(() => {
    load("http://localhost:4200");
  }, []);

  document.addEventListener(
    "angular-input-event",
    function (e) {
      setAngularInputValue(e.detail);
    },
    { capture: true }
  );

  return (
    <div className="app">
      <div className="react-app-container">
        <h2>
          <b>React App</b>
        </h2>
        <p>
          Value from Angular Component: <strong>{angularInputValue}</strong>
        </p>
        <div>
          <input
            onChange={(e) => setReactInputValue(e.target.value)}
            value={reactInputValue}
          />
        </div>
      </div>

      <div>
        <angular-component react-value={reactInputValue} />
      </div>
    </div>
  );
}

export default App;
