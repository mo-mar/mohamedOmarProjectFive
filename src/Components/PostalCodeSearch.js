import React, { Component } from 'react';
import axios from 'axios';

class PostalCodeSearch extends Component {
    constructor(){
        super();
        this.state = {
            postalCode: '',
        }
    }

    requestRep = (postalCode) => {
        axios({
            method: 'GET',
            url: 'http://proxy.hackeryou.com',
            //OR url: 'https://proxy.hackeryou.com',
            dataResponse: 'json',
            params: {
                reqUrl: `https://represent.opennorth.ca/postcodes/${this.state.postalCode}`,
                    'header_params': 'value'
                },
                xmlToJSON: false
            }).then((res) => {
                console.log(res);
            });
    }

    // handleChange(event) {
    //     this.setState({
    //         postalCode: event.target.value,
    //     });
    // }

    handleChange = (event) => {
        this.setState({
            postalCode: event.target.value.toUpperCase(),
        });
        console.log(this.state.postalCode);
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            postalCode: event.target.value,
        })
    }

    render(){
        return(
            <div className="searchField">
                <form>
                <input 
                type="text"
                onChange={this.handleChange} 
                name="postalCodeField"
                value={this.state.postalCode}/>
                <button onClick={this.requestRep} type="submit">Press me</button>
                </form>
            </div>
            )
    }

}
export default PostalCodeSearch;