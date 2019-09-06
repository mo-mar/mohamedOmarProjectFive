import React, { Component } from 'react';
import '../Partials/App.scss';
import Header from './Header';
import axios from 'axios';
// import PostalCodeSearch from './PostalCodeSearch';
import RepTemplates from './RepTemplates';

class App extends Component {
  constructor() {
    super();
    this.state = {
      postalCode: '',
      apiData: [],
    }
  }

  requestRep = (postalCode) => {
    axios({
      method: 'GET',
      url: 'http://proxy.hackeryou.com',
      dataResponse: 'json',
      params: {
        reqUrl: `https://represent.opennorth.ca/postcodes/${this.state.postalCode}`,
      },
      xmlToJSON: false
    }).then((res) => {
      const repData = res.data.representatives_centroid;
      this.setState({
        apiData: repData,
      })
      console.log("this is what we want!", this.state.apiData);
    });
  }

  handleChange = (event) => {
    this.setState({
      postalCode: event.target.value.toUpperCase(),
    });
    console.log(this.state.postalCode);
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.requestRep(this.state.postalCode);
  }

  render(){
  return (
    <div className="App">
     <Header />
      <div className="searchField">
        <form>
          <input
            type="text"
            name="postalCode"
            onChange={this.handleChange}
            value={this.postalCode} />
          <button
            onClick={this.handleSubmit} 
            type="submit">Press me
          </button>
        </form>
        <RepTemplates infoData={this.state.apiData[0]}/>
      </div>
    </div>
  );
  }
}

export default App;
