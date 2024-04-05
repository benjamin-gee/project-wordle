import React from "react";

function GuessInput({ updateGuesses, outOfGuesses }) {
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
                disabled={outOfGuesses}
            />
        </form>
    );
}

export default GuessInput;
