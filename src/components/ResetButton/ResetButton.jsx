import styles from './ResetButton.module.css'

function ResetButton({ onReset }) {
  return (
    <button 
      className={styles.resetButton}
      onClick={onReset}
      aria-label="Reset grid to initial state"
    >
      RESET
    </button>
  )
}

export default ResetButton
