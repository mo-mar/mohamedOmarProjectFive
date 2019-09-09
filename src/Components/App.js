import React, { Component } from 'react';
import '../Partials/App.scss';
import Header from './Header';
import axios from 'axios';
import RepTemplates from './RepTemplates';
import Footer from './Footer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      postalCode: '',
      apiData: [],
      isPostalCodeWrong: '',
    }
  }

  // this function will take the user's postal code and add it as an endpoint to the API URL. Then it will take a specific object (represenstatives_centroid) from the returned data and add it to the state.
  requestRep = (postalCode) => {
    axios({
      method: 'GET',
      url: 'https://proxy.hackeryou.com',
      dataResponse: 'json',
      params: {
        reqUrl: `https://represent.opennorth.ca/postcodes/${this.state.postalCode}`,
      },
      xmlToJSON: false
    }).then((res) => {
      const repData = res.data.representatives_centroid;
      this.setState ({
        apiData: repData,
      });
      // Note: The API does not send us back a response when there is an error, so ufortunately .catch method does not work. However, there is already some error handling in place that will make sure the user enters a valid postal code.

      // .catch(error => {
      //   console.log(error);
      // })
      setTimeout(this.smoothScroll, 400)
    });
  }

  smoothScroll = () => {
    let destination = document.getElementById('repContainer');
    destination.scrollIntoView({
      behavior: 'smooth', 
      block: 'start' 
    });
  }




  // this will track the user's postal code input and make sure it has no spaces and be uppercase, which is a requirement by the API.

  handleChange = (event) => {
    this.setState({
      postalCode: event.target.value.replace(/\s/g, '').toUpperCase(),
    });
}

  // this will take the user's postal code and feed it into the requestRep function as a parameter. First it will test the code against the regex pattern, and if it successful it will call the requestRep function with that postal code. If it does not pass the regex test, it will set the state of "isPostalCodeWorking" to "yes."

  handleSubmit = (event) => {
    event.preventDefault();
    const postalTest = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;
    if (postalTest.test(this.state.postalCode)){
    this.requestRep(this.state.postalCode);
      this.setState({
        isPostalCodeWrong: '',
      });
    }
    else{
      this.setState({
        isPostalCodeWrong: "yes",
      })
    }
  }
  

  render(){
  return (
    <div className="App">
    <Header />
    {/* this is the input and button */}
      <div className="searchField wrapper">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="postalCodeInput" className="visuallyHidden">Postal Code</label>
          <input
            type="text"
            name="postalCode"
            onChange={this.handleChange}
            value={this.postalCode} />
            {/* this will render if the postal code does not pass the regex test*/}
            {this.state.isPostalCodeWrong === 'yes' && <p className="postalError">Oops! That's not a valid postal code.</p>}
          <button
            // onClick={this.handleSubmit} 
            type="submit">Rep me!
          </button>
        </form>
      </div>
      <div>
        <RepTemplates arrayData={this.state.apiData}/>
      </div>
      <Footer />
    </div>
  );
  }
}

export default App;
