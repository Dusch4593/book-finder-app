import React from "react";
import ReactDOM from "react-dom";
import { fetchResults } from "./fetchResults";
import Search_Bar from "./Search_Bar";
import Books from "./Books";
import Book from "./Book";
import "@babel/polyfill";

import "./styles/styles.css";
//import Results from "./frontend"

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      search_query: '',
      loading: false,
      results: []
    };
  };

  handleChange(event) {
    this.setState({
      search_query: event.target.value,
    });
  };

  handleClick() {
    const { search_query } = this.state;
    if(!search_query) return;
    this.setState({ loading: true });
    fetchResults(search_query);

  }
  render() {
    return(
      <div id="main_wrapper">
        <header>Full Stack Finder</header>
        <div id="content">
          <Search_Bar
            onChange={(event) => this.handleChange(event)}
            search_query={this.state.search_query}
            onClick={() => this.handleClick}
          />
          <Books books_found={this.state.results} loading={this.state.loading}/>
        </div>
        <footer>Made by Brandon Dusch</footer>
      </div>
    )
  }
};



ReactDOM.render(<App />, document.getElementById("root"));
