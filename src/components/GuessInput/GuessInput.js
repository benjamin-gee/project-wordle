import React from "react";

function GuessInput({updateGuesses}) {
  const [input, setInput] = React.useState('');
  return <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        console.log({input}); 
        updateGuesses(input.toUpperCase());
        setInput('');
      }
    }>
    <label htmlFor="guess-input">Enter guess:</label>
    <input id="guess-input" type="text" onChange={(e) => setInput(e.target.value)} value={input} required
      minLength={5}
      maxLength={5}
      title="5 letter word"
      pattern="[a-zA-Z]{5}"/>
  </form>
}

export default GuessInput;
