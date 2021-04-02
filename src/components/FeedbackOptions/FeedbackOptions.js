import styles from './FeedbackOptions.module.css';
const FeedbackOptions = ({ options, countFeedback }) => {
  return (
    <ul className={styles.list}>
      {options.map((option, index) => (
        <li className={styles.item} key={index}>
          <button
            className={styles.button}
            name={option}
            onClick={countFeedback}
          >
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default FeedbackOptions;
