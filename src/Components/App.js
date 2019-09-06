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
      // .catch(error => {
      //     console.log("sorry!");
      //   });
    });
  }

  handleChange = (event) => {
    this.setState({
      postalCode: event.target.value.toUpperCase(),
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
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
