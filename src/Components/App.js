import React, { Component } from 'react';
import '../Partials/App.scss';
import Header from './Header';
import PostalCodeSearch from './PostalCodeSearch';

class App extends Component {
  constructor() {
    super();
    this.state = {
      repsLoaded: false,
    }
  }

  render(){
  return (
    <div className="App">
     <Header />
     <PostalCodeSearch />
    </div>
  );
  }
}

export default App;
