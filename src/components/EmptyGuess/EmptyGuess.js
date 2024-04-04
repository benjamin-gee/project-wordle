import React from "react";

function EmptyGuess() {
    return Array.from({ length: Math.max(0, 5) }, (_, index) => (
        <span key={`${index}-${Math.random()}`} className='cell' />
    ));
}

export default EmptyGuess;
