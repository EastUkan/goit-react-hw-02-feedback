import styles from './Feedback.module.css';
import PropTypes from 'prop-types';

const FeedbackButtons = ({ buttons, onHandleIncrement }) => {
  return (
    <div className="wrapper">
      <ul className={styles.list}>
        {buttons.map(({ id, value }) => {
          return (
            <li className={styles.item} key={id}>
              <button
                value={value}
                className={styles.button}
                onClick={evt => {
                  onHandleIncrement(evt);
                }}
              >
                {value}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

FeedbackButtons.propTypes = {
  onHandleIncrement: PropTypes.func,
};

export default FeedbackButtons;
