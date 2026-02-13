# The Recursive Grid – Web Assignment

This project is a **React.js web application** developed as part of an assignment.  
It demonstrates grid interaction logic, ripple rules, and clean component-based UI development using **Vite + React**.

---

## Tech Stack

- **Framework:** React.js (Vite)
- **Styling:** CSS Modules
- **Language:** JavaScript
- **UI Libraries:** None (No Tailwind, No MUI, No AntD)

---

## App Overview

The application displays a **3 × 3 interactive grid** where each cell holds a numeric value.  
Users click cells to update values, which may trigger ripple effects on neighboring cells based on defined rules.

---

## Features

### Interactive Grid
- 9 boxes arranged in a centered **3 × 3 grid**
- Each box starts with value **0**
- Clicking a box increments its value by **1**

### Styling Rules
- **Even Numbers:** Light Gray background 
- **Odd Numbers:** Navy Blue background  with White text
- **Locked Boxes:** Red background
- Rounded corners and shadow styling for clear visual separation

### Ripple Logic

When a box is clicked and its value updates:

- **Rule A – Divisible by 3**
  - Decrease the box immediately to the **right** by **1**
  - No action if the clicked box is in the last column

- **Rule B – Divisible by 5**
  - Increase the box immediately **below** by **2**
  - No action if the clicked box is in the last row

### Locked State
- If any box reaches **15 or higher**:
  - Turns **Red**
  - Becomes **Locked**
  - Cannot be clicked
  - Cannot be modified by ripple effects

### Reset Functionality
- A **Reset** button restores all grid values back to **0**

---

