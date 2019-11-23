// These import necessary modules and set some initial variables
require("dotenv").config();
const express = require("express");
const fetch = require("node-fetch");
const convert = require("xml-js");
const rateLimit = require("express-rate-limit");
const cors = require("cors");
const backend = express();
const port = 3000;

// Enable if you're behind a reverse proxy (Heroku, Bluemix, AWS ELB, Nginx, etc)
// see https://expressjs.com/en/guide/behind-proxies.html
// app.set('trust proxy', 1);

const limiter = rateLimit({
	windowMs: 1000, // 1 second
	max: 1, // limit each IP to 1 requests per windowMs
});


// apply to all requests
backend.use(limiter);

// allow Cross Origin Resource Sharing from any Origin
backend.use(cors());


// Routes

// Test route, visit localhost:3000 to confirm it's working
// should show 'Hello World!' in the browser
backend.get("/", (req, res) => res.send("Hello, World!"));


// Our Goodreads relay route!
backend.get("/api/search", async (req, res) => {
	try {
		// This uses string interpolation to make our search query string
		// it pulls the posted query param and reformats it for goodreads
		const searchString = `q=${req.query.q}`;

		// It uses node-fetch to call the goodreads api, and reads t he key from .env
		const response = await fetch(`http://www.goodreads.com/search/index.xml?key=${process.env.GOODREADS_API_KEY}&${searchString}`);
		//more info here https://www.goodreads.com/api/index#search.books
		const xml = await response.text();

		// Goodreads API returns XML, so to use it easily on the front end, we can
		// convert that to JSON:
		const json = convert.xml2json(xml, { compact: true, spaces: 2 });

		// The API returns stuff we don't care about, so we may as well strip out
		// everything except the results:
		const results = JSON.parse(json).GoodreadsResponse.search.results;

		return res.json({
            success: true,
            results,
        })
	} catch (err) {
		return res.status(500).json({
			success: false,
			message: err.message,
		})
	}
})



backend.listen(port, () => console.log(`Example app listening on port ${port}!`));
