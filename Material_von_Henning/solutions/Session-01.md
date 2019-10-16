# Solutions for Session 1

1. What's the value of `result`?

> 8

---

2. What's the value of `result`?

> 7

---

3. Write a function `sumOfDoubles` that takes 3 parameter, doubles each and returns their sum.

```js
function sumOfDoubles(a, b, c) {
    return 2 * (a + b + c)
}

const sumOfDoubles = (a, b, c) => 2 * (a + b + c)
```

---

4. What will be logged?

> Henning's role is Engineer

---

5. Write a function `greet` that takes a name and returns a greeting. Make use of template literals and arrow functions.

```js
const greet = name => `Hello, ${name}`
```

---

6. What will be logged?

> Hello, Nina

---

7. What do we need to change in exercise 6 to log `Hello, Henning`?

```js
const person = { name: 'Henning', age: 28 }
const person2 = { ...person }
person2.name = 'Nina'

console.log(`Hello, ${person.name}`)
```

---

8. Use map() to quadruple every element of an array.

```js
const numbers = [1, 2, 3, 4]
const quadruples = numbers.map(number => number * 4)
```

```js
function quadruple(number) {
    return number * 4
}

const numbers = [1, 2, 3, 4]
const quadruples = numbers.map(quadruple)
```

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

```js
const personsWithId = persons.map((person, index) => {
    person.id = index
    return person
})
```

---

10. Use `filter()` to select all odd numbers of an array.

```js
const numbers = [1, 2, 3, 4, 5, 6, 7, 8]
const odds = numbers.filter(number => number % 2 === 1)
```

---

11. Use `filter()` to select all adult (ie. 18 years or older) persons from the data given in exercise 9.

```js
persons.filter(person => person.age >= 18)
```

---

12. Write a function that accepts a search query and uses `filter()` to select all persons that match the query (again use the data from exercise 9).

```js
function search(query) {
    return persons.filter(person => person.name.includes(query))
}
```

---

13. Use `reduce()` to calculate the sum of all even numbers in an array.

```js
const numbers = [1, 2, 3, 4, 5, 6, 7, 8]
const sumOfEvens = numbers.reduce((sum, number) => {
    if (number % 2 === 0) {
        return sum + number
    }
    return sum
}, 0)
```

---

14. Write a function that selects all children (persons under 18 years) and return a list of their names.

```js
function getChildrenNames(persons) {
    return persons.filter(person.age < 18).map(person => person.name)
}
```

---

15. Count the occurrences of words in a given text.

```js
const words = text.split(' ')
const wordCount = words.reduce((result, word) => {
    if (!result[word]) {
        result[word] = 0
    }
    result[word] += 1
    return result
})
```
