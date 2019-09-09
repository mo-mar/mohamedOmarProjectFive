import React, { Component } from 'react';

class RepTemplates extends Component {

    handleBrokenImage = (event) => {
        event.target.src = "https://placedog.net/640/480?random"
    }
    render(){
        const { arrayData } = this.props;
        const repData = arrayData.map((oneRep, index) => {
            console.log(index);
            return(
                <div className="repGroup" key={index}>
                    <h3 className="repName">{oneRep.name} is your {oneRep.elected_office} in the {oneRep.representative_set_name}</h3>
                    <div className="repFlex">
                    {oneRep.photo_url !== '' ? <div className="repImageContainer">
                            <img src={oneRep.photo_url} alt="A photograph of the political representative." onError={this.handleBrokenImage} /> 
                            </div> : 
                            <div className="repImageContainer">
                            <p className="imageErrorMessage">Oops! There's no photo currently available for this representative. Here's a placeholder until we get one:</p>
                            <img src="https://placedog.net/640/480?random" alt="A photograph of a cute dog."/>
                            </div> }
                        <div className="repInfo">
                            <p>District represented: {oneRep.district_name}</p>
                            {oneRep.personal_url !== '' ? <p>Learn more about {oneRep.first_name} <a href={oneRep.personal_url} target="_blank">here.</a></p> : null}
                            <p>Contact: <span className="email">{oneRep.email}</span>
                            </p>
                            { oneRep.extra.twitter !== '' ? <p>Twitter: {oneRep.extra.twitter}</p> : null}
                        </div>
                    </div>
                </div>
            )
        })
        return(
            <main>
                <div className="generatedReps wrapper">
                    { repData }
                </div>
            </main>
        )
    }
}
export default RepTemplates;