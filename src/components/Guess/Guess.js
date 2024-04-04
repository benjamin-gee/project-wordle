import React from "react";
import EmptyGuess from "../EmptyGuess/EmptyGuess";

function Guess({ guess }) {
    return (
        <p className='guess' key={`${guess.id}-guess`}>
            {guess.value ? (
                guess.value.split("").map((letter) => (
                    <span key={`${guess.id}-${Math.random()}`} className='cell'>
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
