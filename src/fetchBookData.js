// returns an array of objects
// each object contains some extracted data for each search result
const extractData = (response) => {

  if(!response) return {};
  const data = response.results.work;
  return data.map((book) => {
    const title = book.best_book.title._text;
    const author = book.best_book.author.name._text;
    const imgLink = book.best_book.image_url;
    const pubDate = book.original_publication_month._text + "/ "
                  + book.original_publication_day._text + "/ "
                  + book.original_publication_year._text;

    return {
      title,
      author,
      imgLink,
      pubDate
    };


  });
};


// fetches, reformats (XML ---> JSON), extracts and returns the search data via a backend
const fetchBookData = (search_query) => {
  const GOOD_READS_API_URL = "http://localhost:3000/api/search?q=" + search_query;
  return fetch(GOOD_READS_API_URL)
              .then((res) => res.json())
              .then(extractData)
              .then((data) => {return data})
              .catch(console.log)

};

export default fetchResultsAlt
