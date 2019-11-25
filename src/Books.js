import React from 'react';
import Book from './Book';

export default class Books extends React.Component {
  render() {

    if(this.props.books_found > 1) {
      return this.props.books_found.map((work) => (
        <div>{work}</div>
      ));
    } else {
        return (
          <div className="nothing_found_info">Nothing Found...</div>
        );
    };
  };
};
