import React from 'react';

export default class Book extends React.Component {
  render() {
    const {
      title,
      author,
      imgLink
    } = this.props;

    return (
      <div className = "book">

        <div className = "book_title">
          <h2>{this.props.title}</h2>
          <h4>by {this.props.author}</h4>
        </div>

        <div className = "book_image_block">
          <img src={this.props.imgLink} alt = '' className = "book_image" />
        </div>
      </div>
    )
  }
}
