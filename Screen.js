import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [isScreen1, setIsScreen1] = useState(0);
  
  const next = (e) => {
    setIsScreen1(1);
  };
  const next1 = (e) => {
    setIsScreen1(2);
  };
  const prev1 = (e) => {
    setIsScreen1(0);
  };
  const prev = (e) => {
    setIsScreen1(1);
  };
  return (
    <div className="App">
      {isScreen1 == 0 && (
        <div>
          <h1>Screen 1</h1>
          <button onClick={(e) => next(e)}>Next</button>
        </div>
      )}
      {isScreen1 == 1 && (
        <div>
          <h1>Screen 2</h1>
          <button onClick={(e) => prev1(e)}>Prev</button>
          <button onClick={(e) => next1(e)}>Next</button>
        </div>
      )}
            {isScreen1 == 2 && (
              <div>
          <h1>Screen 3</h1>
          <button onClick={(e) => prev(e)}>Prev</button>
        </div>
)}
    </div>
  );
}
