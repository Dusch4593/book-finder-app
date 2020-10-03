import React from "react";

export default class Search_Bar extends React.Component {
  render() {
    return(
      <div id="search_bar">
        <input type="text"
               value={this.props.search_query}
               onChange={this.props.onChange}
               onKeyPress={(event) => {
                 if(event.key === "Enter"){
                   this.props.onClick();
                 }
               }}
               placeholder="Enter author name or book name..."
        />

        <button id="search_button" onClick={this.props.onClick}>Search</button>
      </div>
    )
  }
};
