import React from "react";
import ReactDOM from "react-dom";
import  fetchResults from "./fetchResults";
import Search_Bar from "./Search_Bar";
import Books from "./Books";
import Book from "./Book";
import "@babel/polyfill";

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
  };

  handleChange(event) {
    this.setState({
      search_query: event.target.value,
    });
  };

  handleClick() {
    const {search_query} = this.state;

    if(!search_query) return;
    this.setState({ loading: true, });
    fetchResults(search_query)
      .then((results) => {
        this.setState({results, loading: false})
        console.log(results)
      })
    console.log(this.state.results)
  }


  // Component Updating
  render() {
    return(
      <div id="main_wrapper">
        <header id="header_text"><strong>Full Stack Finder</strong></header>
        <div id="content">
          <Search_Bar
            onChange={(event) => this.handleChange(event)}
            search_query={this.state.search_query}
            onClick={() => this.handleClick()}
          />
        </div>
        <div id="books">
          <Books books_found={this.state.results} loading={this.state.loading}/>
        </div>

        <footer id="footer_text">Made by Brandon Dusch</footer>
      </div>
    )
  }
};



ReactDOM.render(<App />, document.getElementById("root"));
