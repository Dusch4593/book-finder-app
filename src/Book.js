import React from 'react';

export default class Book extends React.Component {
  render() {
    const {
      title,
      author,
      imgLink,
      pubDate
    } = this.props;

    const bookLink = `https://www.goodreads.com/book/title?id=${title}`;
    return (
      <div className = "book">
        <div className = "book_title">
          <h2>{title}</h2>
        </div>
        <div className = "book_image_block">
          <a target="_blank" rel="noopener noreferrer" href={bookLink}>
            <img src={imgLink} alt = '' className = "book_image" />
          </a>
        </div>
        <div className = "book_info">
        <strong>Author</strong>: {author} <br/><br/>
        <strong>Published Date: </strong> {pubDate}
        </div>
      </div>
    )
  }
}
