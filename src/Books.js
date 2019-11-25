import React from 'react';
import Book from './Book';

export default class Books extends React.Component {
  render() {
    const {books_found} = this.props
    if(books_found > 1) {
      return books_found.map((work) => (
        <Book
          key={work}
          title={work.title}
          author={work.author}
          image={work.imgLink._text}
        />
      ));
    } else {
        return (
          <div className="nothing_found_info">Nothing Found...</div>
        );
    };
  };
};
