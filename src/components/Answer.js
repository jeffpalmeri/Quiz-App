import React from 'react';
import '../styles/Answer.css';

const Answer = ({
  data,
  setQuestionNumber,
  questionNumber,
  setCounter,
  counter,
  setFinished,
}) => {
  // The click handler function that updates questionNumber and the score counter.
  const updateData = (e) => {
    if (questionNumber <= 5) {
      setQuestionNumber(questionNumber + 1);
    }
    if (questionNumber === 5) setFinished(true);
    setCounter({
      ...counter,
      [e.target.className]: counter[e.target.className] + 1,
    });
  };

  // .map through the 'answers' value in quizData to build list items
  // with the two potential question answers.
  let choices = data.answers.map((choice, index) => (
    <li className={choice.point} onClick={updateData} key={index}>
      {choice.option}
    </li>
  ));

  return <ul className='answer-list'>{choices}</ul>;
};

export default Answer;
