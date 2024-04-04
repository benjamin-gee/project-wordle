import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessInput({ updateGuesses, numOfGuesses }) {
    const [input, setInput] = React.useState("");
    return (
        <form
            className='guess-input-wrapper'
            onSubmit={(event) => {
                event.preventDefault();
                updateGuesses(input.toUpperCase());
                setInput("");
            }}
        >
            <label htmlFor='guess-input'>Enter guess:</label>
            <input
                id='guess-input'
                type='text'
                onChange={(e) => setInput(e.target.value)}
                value={input}
                required
                minLength={5}
                maxLength={5}
                title='5 letter word'
                pattern='[a-zA-Z]{5}'
                disabled={numOfGuesses === NUM_OF_GUESSES_ALLOWED}
            />
        </form>
    );
}

export default GuessInput;
