---
stylesheet: https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/2.10.0/github-markdown.min.css
body_class: markdown-body
css: |-
    .page-break { page-break-after: always; }
    .markdown-body { font-size: 12px; }
    .markdown-body pre > code { white-space: pre-wrap; }
---

# Exercises for Session 1

## Goals

The goal of these excercises is to repeat modern JavaScript best practices.

---

1. What's the value of `result`?

```js
const badlyNamedFunction = (a, b) => a + b

const result = badlyNamedFunction(3, 5)
```

---

2. What's the value of `result`?

```js
const badlyNamedFunction = (a, b = 3) => a + b

const result = badlyNamedFunction(4)
```

---

3. Write a function `sumOfDoubles` that takes 3 parameter, doubles each and returns their sum.

---

4. What will be logged?

```js
const data = { name: 'Henning', role: 'Engineer' }

console.log(`${data.name}'s role is ${data.role}`)
```

---

5. Write a function `greet` that takes a name and returns a greeting. Make use of template literals and arrow functions.

---

6. What will be logged?

```js
const person = { name: 'Henning', age: 28 }
const person2 = person
person2.name = 'Nina'

console.log(`Hello, ${person.name}`)
```

---

7. What do we need to change in exercise 6 to log `Hello, Henning`?

---

8. Use map() to quadruple every element of an array.

---

9. Use `map()` to add an id (incrementing, starting at 0) to every person.

```js
const persons = [
    { name: 'Eddard', age: 41 },
    { name: 'Catelyn', age: 40 },
    { name: 'Daenerys', age: 16 },
    { name: 'Tyrion', age: 32 },
    { name: 'Jon', age: 16 },
    { name: 'Brandon', age: 10 },
    { name: 'Sansa', age: 13 },
    { name: 'Arya', age: 11 },
    { name: 'Theon', age: 16 },
    { name: 'Davos', age: 49 },
    { name: 'Jaime', age: 36 },
    { name: 'Samwell', age: 17 },
    { name: 'Cersei', age: 36 },
    { name: 'Brienne', age: 32 }
]
```

---

10. Use `filter()` to select all odd numbers of an array.

---

11. Use `filter()` to select all adult (ie. 18 years or older) persons from the data given in exercise 9.

---

12. Write a function that accepts a search query and uses `filter()` to select all persons that match the query (again use the data from exercise 9).

---

13. Use `reduce()` to calculate the sum of all even numbers in an array.

---

14. Write a function that selects all children (persons under 18 years) and return a list of their names.

---

15. Count the occurrences of words in a given text.

```js
const text =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

// result format: { "Word": count }
```

---

**Congratulations 🎉**

You made it through all exercises for modern JavaScript.
