import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import PreviousGuessList from "../PreviousGuessList/PreviousGuessList";
import GuessGrid from "../GuessGrid/GuessGrid";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers";
import HappyBanner from "../HappyBanner/HappyBanner";
import SadBanner from "../SadBanner/SadBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);

function Game() {
    const [guesses, setGuesses] = React.useState([]);
    const [outOfGuesses, setOutOfGuesses] = React.useState(false);
    const [foundAnswer, setFoundAnswer] = React.useState(false);

    const updateGuesses = (guess) => {
        const nextGuess = {
            value: guess,
            id: Math.random()
        };
        setGuesses([...guesses, nextGuess]);
        if (guesses.length === NUM_OF_GUESSES_ALLOWED - 1) {
            setOutOfGuesses(true);
        }
        if (checkWin(guess, answer)) {
            setFoundAnswer(true);
            setOutOfGuesses(true);
        }
    };
    return (
        <>
            {foundAnswer && <HappyBanner numOfGuesses={guesses.length} />}
            {!foundAnswer && outOfGuesses && <SadBanner answer={answer} />}
            <GuessGrid guesses={guesses} answer={answer} />
            <PreviousGuessList guesses={guesses} />
            <GuessInput
                updateGuesses={updateGuesses}
                outOfGuesses={outOfGuesses}
            />
        </>
    );
}

const checkWin = (guess, answer) => {
    const validatedGuess = checkGuess(guess, answer);

    return !validatedGuess.some((validatedLetter) => {
        return (
            validatedLetter.status === "incorrect" ||
            validatedLetter.status === "misplaced"
        );
    });
};

export default Game;
