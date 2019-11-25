import React from "react";
import ReactDOM from "react-dom";
import  fetchResultsAlt from "./fetchResultsAlt";
import Search_Bar from "./Search_Bar";
import Books from "./Books";
import Book from "./Book";
import "@babel/polyfill";

import "./styles/styles.css";
//import Results from "./frontend"

class App extends React.Component {
  // Component Mounting
  constructor(props){
    super(props)
    this.state = {
      search_query: '',
      loading: false,
      results: {}
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    //this.fetchResults = this.fetchResults.bind(this);
    //this.extractData = this.extractData.bind(this);
  };

  // extractData(response) {
  //
  //   if(!response) return {};
  //   const data = response.results.work;
  //   return data.map((book) => {
  //     const title = book.best_book.title._text;
  //     const author = book.best_book.author.name._text;
  //     const imgLink = book.best_book.image_url;
  //
  //     return {
  //       title,
  //       author,
  //       imgLink
  //     };
  //
  //
  //   });
  // };

  // fetchResults(search_query) {
  //   const GOOD_READS_API_URL = "http://localhost:3000/api/search?q=" + search_query;
  //   return fetch(GOOD_READS_API_URL)
  //               .then((res) => res.json())
  //               .then((res) => this.extractData(res))
  //               .then((results) => {
  //                 this.setState({
  //                   results,
  //                   loading: false,
  //                 })
  //               })
  //               .catch(console.log)
  // }

  handleChange(event) {
    this.setState({
      search_query: event.target.value,
    });
  };

handleClick() {
  const {search_query} = this.state;

  if(!search_query) return;
  this.setState({ loading: true, });
  fetchResultsAlt(search_query)
    .then((results) => {
      this.setState({results, loading: false})
      console.log(this.state.results)
    })

}


  // Component Updating
  render() {
    return(
      <div id="main_wrapper">
        <header>Full Stack Finder</header>
        <div id="content">
          <Search_Bar
            onChange={(event) => this.handleChange(event)}
            search_query={this.state.search_query}
            onClick={() => this.handleClick()}
          />
          <Books books_found={this.state.results} loading={this.state.loading}/>
        </div>
        <footer>Made by Brandon Dusch</footer>
      </div>
    )
  }
};



ReactDOM.render(<App />, document.getElementById("root"));
