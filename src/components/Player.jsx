import { useState, useRef } from "react";

export default function Player() {
  const [enteredPlayerName, setEnteredPlayerName] = useState(null);
 // const [submitted, setSubmitted] = useState(false);

  // reference to the input
  const playerName = useRef()  

  const handleChange = (/* event */) => {
    // setEnteredPlayerName(event.target.value);
    playerName.current.value = "";
  };

  const handleClick=() => {
    // setSubmitted(true);
    setEnteredPlayerName(playerName.current.value);
  };

  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ? enteredPlayerName :"unknown entity"}</h2>
      <p>
        <input type="text"   /* onChange={handleChange} value={enteredPlayerName}" */ ref={playerName}/>
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
