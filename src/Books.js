import React from 'react';
import Book from './Book';

export default class Books extends React.Component {
  render() {
    if(this.props.books_found > 1) {
      console.log(this.prop.books_found)
      return this.props.books_found.map((work) => (
        <Book
          title={work.best_book.title._text}
          author={work.best_book.author.name._text}
          image={work.best_book.image_url._text}
        />
      ));
    } else {
        return (
          <div className="nothing_found_info">Nothing Found...</div>
        );
    };
  };
};
