import React, { useState } from 'react';
import Answer from './Answer';
import FinishedScreen from '../components/FinishedScreen';
import ProgressBar from '../components/ProgressBar';
import quizData from '../quizData/quizData';
import '../styles/Quiz.css';

const Quiz = () => {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [counter, setCounter] = useState({ NY: 0, LA: 0 });
  const [start, setStart] = useState(false);
  const [finished, setFinished] = useState(false);

  // Conditionally render the Starting Prompt, Quiz Questions, or Finished Screen based on state.
  if (!finished) {
    return (
      <div className='Quiz'>
        <ProgressBar questionNumber={questionNumber} />
        {start && questionNumber <= Object.keys(quizData).length ? (
          <>
            <div className='question-prompt'>
              <p>Question #{questionNumber}</p>
              <h1>{quizData[questionNumber].question}</h1>
              <Answer
                data={quizData[questionNumber]}
                questionNumber={questionNumber}
                setQuestionNumber={setQuestionNumber}
                setCounter={setCounter}
                counter={counter}
                finished={finished}
                setFinished={setFinished}
              />
            </div>
          </>
        ) : (
          <div className='starting-prompt'>
            <h1>Did you escape from NY or LA?</h1>
            <button className='start-button' onClick={() => setStart(true)}>
              Start Quiz
            </button>
          </div>
        )}
      </div>
    );
  } else {
    return (
      <>
        <ProgressBar questionNumber={questionNumber} />
        <FinishedScreen
          counter={counter}
          setFinished={setFinished}
          setCounter={setCounter}
          setStart={setStart}
          setQuestionNumber={setQuestionNumber}
        />
      </>
    );
  }
};

export default Quiz;
