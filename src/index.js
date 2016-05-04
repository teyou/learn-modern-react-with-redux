import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';

//const API_KEY = 'AIzaSyDUdRdYwi2j9X-EHirJCSOtWJmHc0vZmvY';
const API_KEY = 'AIzaSyBxOPQVHeCq5FCJzjmjF-z2kszccIteJAE';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {videos: []};


    YTSearch({key : API_KEY, term: 'surfboards'}, (videos) => {
      console.log(videos);
      this.setState({ videos });
    });
  }

  render(){
    return (
      <div>
        <SearchBar />
      </div>
    )
  }
}


ReactDOM.render(<App />, document.querySelector('.container'));
