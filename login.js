import React, { useState } from "react";
import "./styles.css";

const App = () => {
  const [frist, setFrist] = useState(0);
  const [last, setLast] = useState(0);

  const handleFrist = (e) => {
    setFrist(e.target.value);
  };

  const handleLast = (e) => {
    setLast(e.target.value);
  };
  const Sumit = (e) => {
    let a = frist;
    let b = last;
    
    alert(`The name you entered was: ${frist} ${last}`)
  };

  return (
    <div className="App">
      <b>Username : </b>
      <input
        onChange={(e) => handleFrist(e)}
        value={frist ? frist : ""}
        type="text"
      />
      <br />
      <br />
      <b>Password : </b>
      <input
        onChange={(e) => handleLast(e)}
        value={last ? last : ""}
        type="text"
      />
      <br />
      <br />
      
      <button onClick={(e) => Sumit(e)}>Sumit</button>

    </div>
  );
};

export default App;
