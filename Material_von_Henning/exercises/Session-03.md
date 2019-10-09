---
stylesheet: https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/2.10.0/github-markdown.min.css
body_class: markdown-body
css: |-
    .page-break { page-break-after: always; }
    .markdown-body { font-size: 12px; }
    .markdown-body pre > code { white-space: pre-wrap; }
---

# Exercises for Session 3

## Goals

The goal is to train DOM interactions like queries and manipulation. Then we will take a look at various APIs like `fetch`, `localStorage` and `geolocation`. If time permits we will show our first Google Maps map.

---

### Train your DOM muscles

This will be our training ground, a large form with various elements:

```html
<html>
    <head>
        <title>DOM Training</title>
    </head>
    <body>
        <form>
            <table>
                <tr class="name-row">
                    <td>First name</td>
                    <td><input type="text" id="fn" /></td>
                </tr>
                <tr class="name-row">
                    <td>Last name</td>
                    <td><input type="text" id="ln" /></td>
                </tr>
                <tr>
                    <td>Gender</td>
                    <td>
                        <input type="radio" id="m" name="gender" />male<br />
                        <input type="radio" id="f" name="gender" />female
                    </td>
                </tr>
                <tr>
                    <td>Phone number</td>
                    <td><input type="tel" id="tel" /></td>
                </tr>
                <tr>
                    <td>E-mail</td>
                    <td><input type="email" id="email" /></td>
                </tr>
                <tr>
                    <td>Kind of contact</td>
                    <td>
                        <select>
                            <option value="ir">Interview Request</option>
                            <option value="mq">Membership Questions</option>
                            <option value="pq">Partnership Questions</option>
                            <option value="tq">Technology Questions</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td>Comment</td>
                    <td><textarea></textarea></td>
                </tr>
            </table>
        </form>
    </body>
</html>
```

If you want to you can copy this into a new file and view it in your browser.

**Let's start off with some Selector cardio:**

1. Select all form elements (`input`, `select` and `textarea`) with one query

2. Select all `name-row`s

3. Select all inputs with the type `text`

4. Select the first table row (`<tr>`)

5. Select the element with the id `email`

6. Select the inputs inside the `name-row`s

7. Select all options of the select

8. Use the result from **7** and save all values of the options into an array. Use `map` for this.

**Top it off with some DOM manipulation:**

1. Add a `h1` with the text `Contact us` as the first element inside the `form`

2. Add a submit `button` as last element to the form

3. Add a `click` listener to the submit button. When clicked it should add a banner below the form saying `Data successfully sent`.

### fetch()

Let's load some data from an external server and display it.

1. Use `fetch` to load the data from `https://api.punkapi.com/v2/beers` and log it into the console (remember to parse it to JSON first).

2. Build a small site that has a button that when clicked starts the `fetch` and displays the result in a list.
