const FeedbackOptions = ({ options, countFeedback }) => {
  return (
    <ul>
      {options.map((option, index) => (
        <li key={index}>
          <button name={option} onClick={countFeedback}>
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default FeedbackOptions;
