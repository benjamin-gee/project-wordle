import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import Guess from "../Guess/Guess";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
    const [guesses, setGuesses] = React.useState([]);

    const updateGuesses = (guess) => {
        const nextGuess = {
            value: guess,
            id: Math.random()
        };
        setGuesses([...guesses, nextGuess]);
    };
    return (
        <>
            <Guess guesses={guesses} />
            <GuessInput updateGuesses={updateGuesses} />
        </>
    );
}

export default Game;
