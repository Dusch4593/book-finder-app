## **FULL STACK FINDER**

**Full Stack Finder** is a simple app that allows a user to search through Goodreads' API and display the results.

It is written in React, which uses components to work with and display the search results.


#### How to Start ####

First, you'll need to [sign up](goodreads.com) for a Goodreads account and request a developer key at https://www.goodreads.com/api

I stored the API key in an environment variable and included in the `.gitignore` file.

Next, go ahead and clone this repo. Save it somewhere on your local machine where it will be easy to find.

Launch a command line/ console/ terminal window; open a second tab. Then `cd` into the directory of the repo on both tabs.

On one tab, launch the backend: `node backend.js`
(Because of the nature of Goodreads' API, it must be handled through a backend)

On the other tab, launch the frontend: `npm start`
(This will open a window on the browser at port 8080)

At this point, you will find a simple web page where you can type a search query into the search bar, click the search button, and display the search results!
