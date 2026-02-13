# The Recursive Grid – Web Assignment

This project is a **React.js web application** developed as part of an assignment.  
It demonstrates grid interaction logic, ripple rules, and clean component-based UI development using **Vite + React**.

---

## Live Demo

https://recursive-grid-vert.vercel.app/

---

## Tech Stack

- **Framework:** React.js (Vite)
- **Styling:** CSS Modules
- **Language:** JavaScript
- **UI Libraries:** None

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
- **Even Numbers:** Light Gray background `#e0e0e0`
- **Odd Numbers:** Navy Blue background `#1a237e` with White text
- **Locked Boxes:** Red background
- Rounded corners and shadow styling

### Ripple Logic
- **Divisible by 3:** Decrease the box to the **right** by **1** (if exists)
- **Divisible by 5:** Increase the box **below** by **2** (if exists)

### Locked State
- Value **≥ 15** turns the box **Red**
- Locked boxes cannot be clicked or modified

### Reset Functionality
- A **Reset** button
