import React from 'react';
import logo from './logo.svg';
import './App.css';

/**
  @Assume content comes from API
 */
const words = ["Adele", "Agnes", "Billy", "Bob", "Calvin", "Christina", "Cindy", "Pat", "Patrick", "Kim", "Kimanje"];

class App extends React.Component {
  state = {
    allWords: [], // Always contains original content as it comes from API
    searchResults: [], // search results
  }

  componentDidMount(){
    // Update state with data from API
    this.setState({ searchResults: words, allWords: words})
  }

  /**
    Filter words basing on user input
   */
  handleChange = (evt) => {
    const result = this.state.allWords.filter((word) => {

      // Note Remove toUpperCase() if you want to perform a case-sensitive search
      const inputWord = evt.target.value.toUpperCase();
      const originalWord = word.toUpperCase();

      return  originalWord.indexOf(inputWord) === -1 ? false : true;
    })

    // Update search results
    this.setState({ searchResults: result})
  }
  render(){
    return(
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
          <h3>React search filter</h3>
          <input type="text" id="myInput" placeholder="Search for names.." onChange={this.handleChange} />

          <ul id="myUL">
              {
                this.state.searchResults.map((word, index) => (
                  <li key={index}><span>{word}</span></li>
                ))
              }
              
          </ul>
      </div>
      
    )
  }
}


export default App;
