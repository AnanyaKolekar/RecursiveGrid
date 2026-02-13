import Box from '../Box/Box'
import styles from './Grid.module.css'

function Grid({ grid, onBoxClick, isBoxLocked }) {
  return (
    <div className={styles.grid}>
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} className={styles.row}>
          {row.map((value, colIndex) => (
            <Box
              key={`${rowIndex}-${colIndex}`}
              value={value}
              row={rowIndex}
              col={colIndex}
              onClick={() => onBoxClick(rowIndex, colIndex)}
              isLocked={isBoxLocked(rowIndex, colIndex)}
            />
          ))}
        </div>
      ))}
    </div>
  )
}

export default Grid
