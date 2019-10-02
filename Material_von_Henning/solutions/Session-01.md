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
