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
      latAndLng: '',
    }
  }

  // this function will take the user's postal code and add it as an endpoint to the API URL. Then it will take a specific object from the payload (represenstatives_centroid) and add it to the state.

  getCoordinates = (postalCode) => {
    axios({
      method: 'GET',
      dataResponse: 'JSON',
      url: 'http://www.mapquestapi.com/geocoding/v1/address',
      params: {
        key: '0e6fiTKnDmzM3WFno2NIq25f3mKTXGQw',
        location: this.state.postalCode,
      }
    }).then((results) =>{
      let lat = results.data.results[0].locations[0].latLng.lat;
      let lng = results.data.results[0].locations[0].latLng.lng;
      console.log("this is the mapquest result", lat);
      console.log("this is the mapquest result", lng);
    this.setState({
      latAndLng: `${lat},${lng}`,
    });
    }
    ).then(()=>{
      this.requestRep(this.state.latAndLng);
    })}


  // requestRep = (postalCode) => {
  //   axios({
  //     method: 'GET',
  //     url: 'https://proxy.hackeryou.com',
  //     dataResponse: 'json',
  //     params: {
  //       reqUrl: `https://represent.opennorth.ca/postcodes/${this.state.postalCode}`,
  //     },
  //     xmlToJSON: false
  //   }).then((res) => {
  //     const repData = res.data.representatives_centroid;
  //     this.setState ({
  //       apiData: repData,
  //     });
  //     // Note: The API does not send us back a response when there is an error, so ufortunately the .catch method does not work at this time. However, there is already some error handling in place that will make sure the user enters a valid postal code, such as toUpperCase() and the regex test seen below.

  //     // .catch(error => {
  //     //   console.log(error);
  //     // })
  //     setTimeout(this.smoothScroll, 400)
  //     this.getCoordinates();
  //   });
  // }
  
  requestRep = (latAndLng) => {
    axios({
      method: 'GET',
      url: 'https://proxy.hackeryou.com',
      dataResponse: 'json',
      params: {
        reqUrl: `https://represent.opennorth.ca/representatives/?point=${latAndLng}`,
      },
      xmlToJSON: false
    }).then((res) => {
      const repData = res.data.objects;
      console.log(repData);
      this.setState({
        apiData: repData,
      });
      // Note: The API does not send us back a response when there is an error, so ufortunately the .catch method does not work at this time. However, there is already some error handling in place that will make sure the user enters a valid postal code, such as toUpperCase() and the regex test seen below.

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
    this.getCoordinates(this.state.postalCode);
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
  
  // the following code renders the components and, in between, the input and button that will ultimately call our API. The results from that will be fed as a prop to the RepTemplates component.

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
    <RepTemplates arrayData={this.state.apiData}/>
    <Footer />
    </div>
  );
  }
}

export default App;
