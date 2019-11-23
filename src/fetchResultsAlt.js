import React from 'react';

const extractData = (response) => {

  if(!response) return {};
  const data = response.results.work;
  return data.map((book) => {
    const title = book.best_book.title._text;
    const author = book.best_book.author.name._text;
    const imgLink = book.best_book.image_url;

    return {
      title,
      author,
      imgLink
    };


  });
};

export default function fetchReultsAlt(search_query) {
  const GOOD_READS_API_URL = "http://localhost:3000/api/search?q=" + search_query;
  return fetch(GOOD_READS_API_URL)
              .then((res) => res.json())
              .then(extractData)
              .then((res) => console.log(res))
              .catch(console.log)

}
