import styles from './Box.module.css'

function Box({ value, row, col, onClick, isLocked }) {
  const isEven = value % 2 === 0

  const boxClasses = [
    styles.box,
    isEven ? styles.even : styles.odd,
    isLocked ? styles.locked : ''
  ].filter(Boolean).join(' ')

  return (
    <button
      className={boxClasses}
      onClick={onClick}
      disabled={isLocked}
      aria-label={`Box at row ${row + 1}, column ${col + 1}, value ${value}${isLocked ? ', locked' : ''}`}
    >
      {value}
    </button>
  )
}

export default Box
