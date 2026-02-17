# 📘 Phone Book Sorting Lab (AI-Enabled)

## 🎯 Objective

Build a Phone Book system using:

* Arrays of objects
* Manual CRUD operations
* Three sorting algorithms:

  * Bubble Sort
  * Selection Sort
  * Merge Sort

You must write sorting logic manually using loops and recursion.

This lab focuses on:

* For-loop mastery
* Nested loops
* Swapping logic
* Divide & conquer thinking
* Comparing algorithm approaches

---

# 🛑 AI Usage Rules

AI is allowed — but controlled.

Please be abel to:

* Explain every loop
* Explain why swaps happen
* Explain how merge works
* Explain the difference between in-place sorting vs returning a new array

If you cannot explain it, it will be treated as incomplete.

---

# 📂 Project Structure


```
phonebook.js
```

Optional:

```
README.md (your reflections)
```

---

# 📦 Step 1 — Data Structure

Use an array of objects:

```js
let phoneBook = [
  { name: "Jasmine", phone: "4165559999", city: "Detroit" },
  { name: "Dan", phone: "6475551234", city: "Calgary" },
  { name: "Cory", phone: "9051112222", city: "Caledonia" },
  { name: "Wilmer", phone: "4378887777", city: "Wilmington" },
  //Generate 20 to 30 more using AI
];
```

Do NOT use objects as key-value maps for storage.

---

# 🔧 Step 2 — CRUD Functions

Implement the following using loops only:

### 1️⃣ addEntry(book, entry)

* Adds a new entry to the array

### 2️⃣ updateEntry(book, name, newData)

* Find by name using a loop
* Update relevant fields

### 3️⃣ deleteEntry(book, name)

* Remove using splice
* Stop loop once found

---

# 🔁 Step 3 — Sorting Algorithms

You must implement all three manually.

---

## 🟢 Part A — Bubble Sort by Name (Ascending)

Requirements:

* Use nested for loops
* Swap entire objects
* Modify the array directly (in-place)

Function signature:

```js
bubbleSortByName(book)
```

---

## 🟢 Part B — Selection Sort by Phone (Ascending)

Requirements:

* Track minimum index
* Swap once per outer loop
* Convert phone to number before comparing
* Modify array in-place

Function signature:

```js
selectionSortByPhone(book)
```

---

## 🟢 Part C — Merge Sort by Name

Requirements:

* Must use recursion
* Must divide array into halves
* Must use a helper merge() function
* Must return a NEW sorted array
* Must NOT modify original array

Function signature:

```js
mergeSortByName(book)
```

---

# 📊 Reflection Questions

Answer in comments at the bottom of your file:

1. Which algorithm was easiest to implement?
2. Which one was hardest to understand?
3. Which sorting algorithms modify the original array?
4. Which algorithm returns a new array?
5. What is the main structural difference between merge sort and the other two?

---

# 🎯 Grading Criteria

| Criteria                      | Weight |
| ----------------------------- | ------ |
| Correct CRUD logic            | 20%    |
| Bubble Sort implementation    | 20%    |
| Selection Sort implementation | 20%    |
| Merge Sort correctness        | 25%    |
| Code clarity & explanation    | 15%    |

---

# ⚠️ Useful Links

- [Merge Sort - Video](https://www.youtube.com/watch?v=4VqmGXwpLqc)
- [Merge Sort - Coding Tutorial](https://www.geeksforgeeks.org/javascript/javascript-program-for-merge-sort/)
- [Bubble Sort - Video](https://www.youtube.com/watch?v=xli_FI7CuzA)
- [Selection Sort - Video](https://www.youtube.com/watch?v=g-PGLbMth_g)
