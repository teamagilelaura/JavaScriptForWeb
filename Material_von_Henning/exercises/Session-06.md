---
stylesheet: https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/2.10.0/github-markdown.min.css
body_class: markdown-body
css: |-
    .page-break { page-break-after: always; }
    .markdown-body { font-size: 12px; }
    .markdown-body pre > code { white-space: pre-wrap; }
---

# Exercises for Session 6

## Goals

This session will be all about Firebase. We'll add user-entered data to our database, upload files and implement authentication.

---

## Cloud Firestore: Adding data

First, follow this tutorial to setup your firebase project: https://firebase.google.com/docs/web/setup

Then it's time to set up your Cloud Firestore database. Follow this tutorial until Point 5: https://firebase.google.com/docs/firestore/quickstart (It's all done throught the Firebase console UI)

Now it's time to create a new HTML file and load the scripts from firebase (the tutorial should have shown you a snippet). If you're app shows no error in the console everything works as expected.

Let's build a form, so users can enter some data into our database:

```html
<form>
    <label for="title">Title</label>
    <input name="title" placeholder="Write title…" />
    <label for="description">Description</label>
    <textarea name="description" placeholder="Write a description…"></textarea>
    <button onclick="handleFormSubmit(event)">Submit</button>
</form>
```

We're going to implement the `handleFormSubmit()` function:

-   First, we need to prevent the default of the event passed into the function, as we to handle it ourselves
-   Then, we need to read the data from our input and out textarea. Select them and save their values into variables
-   Lastly, we're creating a new database entry from it:

More information: https://firebase.google.com/docs/firestore/quickstart#add_data
