import React, { useState } from "react";
import "./styles.css";

const App = () => {
  const [itam, setItam] = useState(0);
  const itams = [itam];

  const handleItam = (e) => {
    setItam(e.target.value);
  };

  function Add(props) {
    return <li>{ props.brand }</li>;
  }
  
  return (
    <div className="App">
      
      <b>Itam Nmae : </b>
      <input
        onChange={(e) => handleItam(e)}
        value={itam ? itam : ""}
        type="text"
      />
      <br />
      <br />
      <button onClick={(e) => Add(e)}>Add</button>
        <>
	    <ul>
      {itams.map((itam) => <Add brand={itam} />)}
      </ul>
    </>
    </div>
  );
};

export default App;
