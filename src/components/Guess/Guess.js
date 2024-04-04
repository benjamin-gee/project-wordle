import React from "react";
import EmptyGuess from "../EmptyGuess/EmptyGuess";
import { checkGuess } from "../../game-helpers";

function Guess({ guess, answer }) {
    const validatedGuess = checkGuess(guess.value, answer);
    return (
        <p className='guess' key={`${guess.id}-guess`}>
            {guess.value ? (
                guess.value.split("").map((letter, index) => (
                    <span
                        key={`${guess.id}-${Math.random()}`}
                        className={
                            validatedGuess[index].status === "incorrect"
                                ? "cell incorrect"
                                : validatedGuess[index].status === "correct"
                                  ? "cell correct"
                                  : validatedGuess[index].status === "misplaced"
                                    ? "cell misplaced"
                                    : "cell"
                        }
                    >
                        {letter}
                    </span>
                ))
            ) : (
                <EmptyGuess />
            )}
        </p>
    );
}

export default Guess;
