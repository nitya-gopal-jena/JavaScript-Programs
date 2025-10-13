# 📁 JS-Programs

This repository contains JavaScript practice programs organized by topic. Below is the structure and description of each file inside the each folder.

---

# 🛠️ Using `prompt-sync` in Node.js

This guide shows you how to use the `prompt-sync` package to take user input in a Node.js environment — similar to the `prompt()` function in browsers.

---

## Step 1: Initialize Your Project

If you haven't already, create a new Node.js project:

```bash
npm init -y

```

## Step 2: Install

```bash
npm install prompt-sync

```

## Step 3: Import and Use

```bash
const prompt = require('prompt-sync')();

```


### If you don't want to use prompt-sync in Node.js, you can achieve similar functionality directly in a browser using the built-in prompt() function inside an HTML file.

```bash

<!DOCTYPE html>
<html>
<head>
  <title>Take user input using prompt() </title>
</head>
<body>
  <script>
    // JavaScript Code 

    const name = prompt("What's your name?");
    alert(`Hello, ${name}!`);
  </script>
</body>
</html>


```


---



## 📂 Function

| Question No. | File Name     | Description                                           |
| ------------ | ------------- | ----------------------------------------------------- |
| Q1           | `program1.js` | Return the first non repeat element from an array     |
| Q2           | `program2.js` | Returns the largest number from an array              |
| Q3           | `program3.js` | Check if an array is sorted in ascending order or not |
| Q4           | `program4.js` | Returns the index of a given value in an array        |
| Q5           | `program5.js` | Reversed an array elements                            |

---

### 📘 Full Questions

#### Q1: `program1.js`

> Given an array of integers, return the first element that does not repeat. If all elements repeat, return null.

---

#### Q2: `program2.js`

> Write a function that takes an array of numbers and returns the largest number

---

#### Q3: `program3.js`

> Write a function to check if an array is sorted in ascending order.

---

#### Q4: `program4.js`

> Write a function that returns the index of a given value in an array. If not found, return -1.

---

#### Q5: `program5.js`

> Create a function that takes an array and returns a new array with elements in reverse order.

---
