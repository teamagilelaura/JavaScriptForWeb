# JavaScriptForWeb

Lesson 1

https://github.com/henningmu/js-workshop/blob/master/exercises/Session-01.pdf

1. What's the value of result?
const badlyNamedFunction = (a, b) => a + b

const result = badlyNamedFunction(3, 5)

--> 8

2. What's the value of result?
const badlyNamedFunction = (a, b = 3) => a + b

const result = badlyNamedFunction(4)

--> 7 (4 für a und b ist 3) Fall-back, wenn badlyNamedFunction(4, 4) --> 8

4. What will be logged?
const data = { name: 'Henning', role: 'Engineer' }

console.log(`${data.name}'s role is ${data.role}`)

--> Henning's role is Engineer

6. What will be logged?
const person = { name: 'Henning', age: 28 }
const person2 = person
person2.name = 'Nina'

console.log(`Hello, ${person.name}`)

--> Hello Nina

7. What do we need to change in exercise 6 to log Hello, Henning?

--> const person = { name: 'Henning', age: 28 }
const person2 = {...person}
person2.name = 'Nina'

console.log(`Hello, ${person.name}`)

