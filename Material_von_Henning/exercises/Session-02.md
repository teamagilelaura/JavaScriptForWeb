---
stylesheet: https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/2.10.0/github-markdown.min.css
body_class: markdown-body
css: |-
    .page-break { page-break-after: always; }
    .markdown-body { font-size: 12px; }
    .markdown-body pre > code { white-space: pre-wrap; }
---

# Exercises for Session 2

## Goals

The goal of these execercises is to build our first real web app and train some DOM interactions.

---

### Building your first web app

1. Create a new directory `counter`
2. Inside that directory create a file called `index.html`
    - `index.html` should contain the minimal HTML structure and a h1 saying `Hello World`
3. Create another file called `styles.css` and link it from the `head` of your `index.html`
    - Add a CSS rule to color the h1 green
4. Open the `index.html` in your browser and make sure you see the green heading (take a moment to celebrate this success 👏)

Now we're going to add some logic to our site and turn it into an actual app. The goal is to have a counter app:

-   that displays the current value
-   that has one button to increase the value
-   that has one button to decrease the value

First build the UI and then infuse it with life using JavaScript.

> Tips:
>
> -   Select an element with `document.getElementById("")`
> -   Set the content of an element with `element.innerHTML = ""`
> -   Click handlers can be attached with `onclick="functionName()"`

---

**Additional Exercises / Homework:**

Extend your counter app with these features:

1. Start the counter at 5
2. Only accept values between -10 and 10
3. Please write code to color certain value ranges:
    - values below 0 in red
    - 0 in blue
    - values larger than 0 in green

> Hint: you can change the CSS class of an element with `element.classList.add("")` or `element.classList.remove("")`
