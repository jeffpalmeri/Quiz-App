import React from 'react';
import '../styles/FinishedScreen.css';

const FinishedScreen = ({
  counter,
  setFinished,
  setCounter,
  setStart,
  setQuestionNumber,
}) => {
  const resetQuiz = () => {
    setFinished(false);
    setCounter({ NY: 0, LA: 0 });
    setStart(false);
    setQuestionNumber(1);
  };

  // See which city has more points to determine the winner.
  let winner;
  counter.NY > counter.LA ? (winner = 'NY') : (winner = 'LA');

  return (
    <div className='FinishedScreen'>
      <h1>Congrats, you are a survivor!</h1>
      <p>You escaped from {winner}!</p>
      <button className='play-again-button' onClick={resetQuiz}>
        Play Again
      </button>
    </div>
  );
};

export default FinishedScreen;
