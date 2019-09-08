import React, { Component } from 'react';
import '../Partials/App.scss';
import Header from './Header';
import axios from 'axios';
import RepTemplates from './RepTemplates';

class App extends Component {
  constructor() {
    super();
    this.state = {
      postalCode: '',
      apiData: [],
    }
  }

  // this function will take the user's postal code and add it as an endpoint to the API URL. Then it will take a specific object (represenstatives_centroid) from the returned data and add it to the state.
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
      this.setState ({
        apiData: repData,
      })
      .catch(error => {
        console.log();
      })
    });
  }

  // this will track the user's postal code input

  handleChange = (event) => {
    this.setState({
      postalCode: event.target.value.replace(/\s/g, '').toUpperCase(),
    });
}

  // this will take the user's postal code and feed it into the requestRep function as a parameter. Then it will call that function.

  handleSubmit = (event) => {
    event.preventDefault();
    // const codeTest = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;
    this.requestRep(this.state.postalCode);    
   
  }
  

  render(){
  return (
    <div className="App">
    <Header />
      <div className="searchField wrapper">
        <form>
          <input
            type="text"
            name="postalCode"
            onChange={this.handleChange}
            value={this.postalCode} />
            {this.state.isCodeWrong && <p>You got it wrong!</p>}
          <button
            onClick={this.handleSubmit} 
            type="submit">Rep me!
          </button>
        </form>
      </div>
      <div>
        <RepTemplates arrayData={this.state.apiData}/>
      </div>
    </div>
  );
  }
}

export default App;
