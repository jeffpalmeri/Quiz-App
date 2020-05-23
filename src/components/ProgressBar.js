import React from 'react';
import '../styles/ProgressBar.css';

const ProgressBar = ({ questionNumber }) => {
  return (
    <div className='outer-div'>
      <div
        className='inner-div'
        style={{ width: `${((questionNumber - 1) / 5) * 100}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
