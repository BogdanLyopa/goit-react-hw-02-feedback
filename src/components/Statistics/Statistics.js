import React from 'react';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      {good + neutral + bad > 0 ? (
        <div>
          <h2>Statistics</h2>
          <p>Good :{good}</p>
          <p>Neutral :{neutral}</p>
          <p>Bad :{bad}</p>
          <p>Total :{total}</p>
          <p>Positive feedback :{positivePercentage}%</p>
        </div>
      ) : (
        <h2>No feedback given</h2>
      )}
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
};
export default Statistics;
