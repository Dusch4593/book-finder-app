import React from 'react';

export default class Book extends React.Component {
  render() {
    const {
      title,
      author,
      imgLink,
      pubDate
    } = this.props;

    return (
      <div className = "book">
        <div className = "book_title">
          <h2>{title}</h2>
        </div>
        <div className = "book_image_block">
          <img src={imgLink} alt = '' className = "book_image" />
        </div>
        <div className = "book_info">
        <strong>Author</strong>: {author} <br/><br/>
        </div>
      </div>
    )
  }
}
