## **FULL STACK FINDER**

Full Stack Finder is a simple full-stack application that allows a user to search through Goodreads' API and display the results.

For the backend, I created an Express app that uses a relay route to make a GET request for book data from the Goodreads API. The backend utilizes both `node-fetch` and `xml-js` to retrieve and convert the data from XML to JSON format.  

The frontend was written in React (v16+), with a minimal component structure headed by the `<App/>` component. I also created a `fetchBookData` function (separated in its own file) that extracts and returns book data fetched from the backend.

Styling is handled by SASS and compiled into CSS with Gulp.

## Installation and Setup
#### 1. Get your Goodreads developer key and edit `.env.example`
First, if you don't already have one, you'll need to [sign up](goodreads.com) for a Goodreads account.

Login to your account and request a developer key at https://www.goodreads.com/api

I've included a `.env.example` file with placeholders for the `GOODREADS_API_KEY`

After obtaining the key, replace everything on the right side of of the `=` with the key.

This key can now be accessed with `process.env.GOODREADS_API_KEY`

#### 2. Make sure you've installed Node.js and npm
Secondly, make sure you've [installed `npm`](https://www.npmjs.com/get-npm). (you can download/ install npm and Node.js at the same time)

Next, clone the repo somewhere on your computer, then `cd` into the app directory in the command line/ terminal. Make sure to run `npm install` to install the necessary dependencies for the app.

Open a second terminal. Make sure to `cd` into the directory of the repo on both tabs.

#### 3. Launch the Backend and Frontend
On one terminal, launch the backend: `node backend.js`
(Because of the nature of Goodreads' API, it must be handled through a backend)

On the other terminal, launch the frontend: `npm start`
(This will open a window on the browser at port 8080)

At this point, you will find a simple web page where you can type a search query into the search bar, click the search button, and display the search results!

The user can click on an individual book to view its page on Goodreads' website.

## Contributing
Feel free to contribute by [reporting any issues](https://github.com/Dusch4593/flatiron_fitness_rails_app/issues) or [submiting a pull request](https://github.com/Dusch4593/flatiron_fitness_rails_app/pulls).

## License
This application is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).
