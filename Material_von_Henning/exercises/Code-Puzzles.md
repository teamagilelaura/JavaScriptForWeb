---
stylesheet: https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/2.10.0/github-markdown.min.css
body_class: markdown-body
css: |-
    .page-break { page-break-after: always; }
    .markdown-body { font-size: 12px; }
    .markdown-body pre > code { white-space: pre-wrap; }
---

# Code Puzzles

Pick any of these puzzles if you want to train your web development or JavaScript skills.

## Repeating input

Create a new HTML file with an input and a paragraph element. When typing into the input the paragraph should update and show `You typed: X` (`X` is what the user actually typed).

To listen to to these events use a `change` listener:

```js
inputElement.addEventListener('change', event => {
    /* ... */
})
```

### Reverting input

Basically the same mini-app as the repeating input but this time the user input is shown reversed in the paragraph.

## Password Strength detector

Create a new HTML file with an input and a paragraph element. When typing into the input the paragraph should update and show the strength of the password:

-   Less than 6 characters: `Weak`
-   More than 6 and less than 10: `Medium`
-   More than 10: `Strong`
-   More than 20: `Very Strong`

If you feel like it you can add more rules like:

-   `Medium` should at least have upper and lower case letters
-   `Strong` should have upper and lower case letters and a number
-   `Very Strong` should have upper and lower case letters, a number and a special character

## Random Color

Create a new HTML with a div and a button. Each time the button is clicked the background color of the div should change to a new random color.

You can use this array of colors if you don't want to make up your own:

```js
const colors = [
    "palegoldenrod",
    "palegreen",
    "paleturquoise",
    "palevioletred"
    "papayawhip",
    "limegreen",
    "red",
    "blue",
    "green",
    "yellow",
    "yellowgreen",
    "greenyellow",
    "aqua",
]
```

## Start Stop Button

Create a new HTML file with a paragraph and a button. Initially, the paragraph should say `Running` and the button `Stop`.
When the button is clicked the paragraph should switch to `Paused` and the button to `Start`.
When clicking it again the initial texts (`Running` and `Stop`) should be shown.

## Color Chooser

Create a new HTML file with a div, 3 inputs and a button.
The three inputs should accept numbers between 0 and 255. One is labeled `red`, one `blue` and one `green`. When the button is clicked you should read the values of the inputs and set the background color of the div with them.

```js
divElement.style.backgroundColor = `rgb(${red}, ${green}, ${blue})
```

## Alternating row colors

Create a new HTML file with a long list (`ul`) of items (`li`). Select all items in JavaScript and apply a CSS class to every second item. The CSS should set the background color of the element.

## Random Cat images

Create new HTML file and use fetch to load and display a random cat image from `https://aws.random.cat/meow`.

You can also add a button to load a new image.

> PS: There's also an API for dogs if that's your thing: `https://random.dog/woof.json`

> PPS: There's also one for foxes: https://randomfox.ca/floof/
