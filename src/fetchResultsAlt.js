import React from 'react';

const extractData = (response) => {
  const {books} = response;
  if(!books) return [];

  return books.map((book) => {
    const data = book.results;

    const {
      title,
    } = data;

    const imgLink = data.work.best_book.image_url;
    const author = data.work.best_book.author.name._text;

    return {
      title,
      imgLink,
      author
    };


  });
};

export default function fetchReultsAlt(search_query) {
  const GOOD_READS_API_URL = "http://localhost:3000/api/search?q=" + search_query;
  return fetch(GOOD_READS_API_URL)
              .then((res) => res.json())
              .then(extractData)
              .then((res) => console.log())
}
