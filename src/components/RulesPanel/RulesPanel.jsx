import styles from './RulesPanel.module.css'

function RulesPanel({ grid }) {
 
  const totalValue = grid.reduce((sum, row) => {
    return sum + row.reduce((rowSum, cell) => rowSum + cell, 0)
  }, 0)

  
  const lockedCount = grid.reduce((count, row) => {
    return count + row.filter(cell => cell >= 15).length
  }, 0)

  return (
    <div className={styles.panel}>
      <h2 className={styles.title}>How to Play</h2>
      
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Click to Increment</h3>
        <p className={styles.sectionText}>Tap a cell to increase its value by 1</p>
      </div>

      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Row Ripple</h3>
        <p className={styles.sectionText}>If divisible by 3 → right cell -1</p>
      </div>

      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Column Ripple</h3>
        <p className={styles.sectionText}>If divisible by 5 → bottom cell +2</p>
      </div>

      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Lock State</h3>
        <p className={styles.sectionText}>Value 15+ locks the cell</p>
      </div>

      <div className={styles.colorGuide}>
        <h3 className={styles.colorGuideTitle}>Color Guide</h3>
        <div className={styles.colorRow}>
          <div className={styles.colorItem}>
            <span className={`${styles.colorDot} ${styles.evenDot}`}></span>
            <span className={styles.colorLabel}>Even</span>
          </div>
          <div className={styles.colorItem}>
            <span className={`${styles.colorDot} ${styles.oddDot}`}></span>
            <span className={styles.colorLabel}>Odd</span>
          </div>
          <div className={styles.colorItem}>
            <span className={`${styles.colorDot} ${styles.lockedDot}`}></span>
            <span className={styles.colorLabel}>Locked</span>
          </div>
        </div>
      </div>

      <div className={styles.stats}>
        <h3 className={styles.statsTitle}>Live Stats</h3>
        <div className={styles.statsRow}>
          <div className={styles.statItem}>
            <span className={styles.statLabel}>Total Value</span>
            <span className={styles.statValue}>{totalValue}</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statLabel}>Locked Cells</span>
            <span className={styles.statValue}>{lockedCount}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RulesPanel
