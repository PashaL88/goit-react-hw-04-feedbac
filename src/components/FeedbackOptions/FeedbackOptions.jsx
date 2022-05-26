import styles from "./FeedbackOptions.module.css"
import PropTypes from 'prop-types';

function FeedbackOptions({ options, onLeaveFeedback }) {
  const elements = options.map((item, index) => {
      return (
        
        <button key = {index} className={styles.btn} type="button" onClick={() => {onLeaveFeedback(item)}}>{item}</button>
        
      )
    });
  return <>{elements}</>;
}

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func.isRequired
};