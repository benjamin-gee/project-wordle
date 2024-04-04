import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";
import Guess from "../Guess";

function GuessGrid({ guesses }) {
    const paddedGuesses = padGuesses(guesses);
    console.log({ paddedGuesses });
    return (
        <div className='guess-results'>
            {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
                <Guess key={num} guess={paddedGuesses[num]} />
            ))}
        </div>
    );
}

const padGuesses = (guesses) => {
    const paddedGuesses = [...guesses];
    while (paddedGuesses.length < NUM_OF_GUESSES_ALLOWED) {
        paddedGuesses.push({ value: "", id: Math.random() });
    }
    return paddedGuesses;
};

export default GuessGrid;
