import React, { Component } from 'react'
import SearchBar from './SearchBar.js'
import Books from './Books.js'
import  fetchResults from "./fetchResults";

class App extends Component {
  // Component Mounting
  state = {
    search_query: '',
    loading: false,
    results: {}
  }

  handleChange = (e) => {
    this.setState({
      search_query: e.target.value
    })
  }

  handleClick = () => {
    const {search_query} = this.state
    if(!search_query) return;
    this.setState({loading: true})
    fetchResults(search_query)
      .then(res => {
        this.setState({
            results: res,
            loading: false
        }, () => console.log(this.state.results) + " here on line #33")
      })

  }

  render() {
    return(
      <div id="main_wrapper">
        <header id="header_text">
          <strong>Full Stack Finder</strong><br/>
        </header>
        <p id="sub_header_text">
          <i>Results brought to you by <a href="http://www.goodreads.com" rel="noopener" target="_blank">Goodreads</a></i>
        </p>

        <div id="content">
          <SearchBar
            onChange={(event) => this.handleChange(event)}
            search_query={this.state.search_query}
            onClick={this.handleClick}
          />
        </div>
        <div id="books">
          <Books books_found={this.state.results} loading={this.state.loading}/>
        </div>

        <footer id="footer_text">Coded with &#10084;&#65039; by <a href="https://github.com/Dusch4593" rel="noopener" target="_blank" >Brandon Dusch</a> (2020)</footer>
      </div>
    )
  }
};

export default App
