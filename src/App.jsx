import { useState } from 'react'
import Grid from './components/Grid/Grid'
import ResetButton from './components/ResetButton/ResetButton'
import styles from './App.module.css'

function App() {
  const [grid, setGrid] = useState([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ])

  
  const [lockedBoxes, setLockedBoxes] = useState(
    new Set() 
  )

  const isBoxLocked = (row, col) => {
    return lockedBoxes.has(`${row}-${col}`)
  }

  const handleBoxClick = (row, col) => {
    if (isBoxLocked(row, col)) {
      return
    }

    setGrid(prevGrid => {
      const newGrid = prevGrid.map(row => [...row])
      const currentValue = newGrid[row][col]
      const newValue = currentValue + 1

      newGrid[row][col] = newValue

      const newLockedBoxes = new Set(lockedBoxes)
      if (newValue >= 15) {
        newLockedBoxes.add(`${row}-${col}`)
      }

      if (newValue % 3 === 0 && col < 2) {
        const rightRow = row
        const rightCol = col + 1
        if (!newLockedBoxes.has(`${rightRow}-${rightCol}`)) {
          newGrid[rightRow][rightCol] = newGrid[rightRow][rightCol] - 1
        }
      }

      if (newValue % 5 === 0 && row < 2) {
        const belowRow = row + 1
        const belowCol = col
        if (!newLockedBoxes.has(`${belowRow}-${belowCol}`)) {
          newGrid[belowRow][belowCol] = newGrid[belowRow][belowCol] + 2
          
          if (newGrid[belowRow][belowCol] >= 15) {
            newLockedBoxes.add(`${belowRow}-${belowCol}`)
          }
        }
      }

      setLockedBoxes(newLockedBoxes)

      return newGrid
    })
  }

  const handleReset = () => {
    setGrid([
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0]
    ])
    setLockedBoxes(new Set())
  }

  return (
    <div className={styles.app}>
      <h1 className={styles.title}>The Recursive Grid</h1>
      <Grid 
        grid={grid} 
        onBoxClick={handleBoxClick}
        isBoxLocked={isBoxLocked}
      />
      <ResetButton onReset={handleReset} />
    </div>
  )
}

export default App
