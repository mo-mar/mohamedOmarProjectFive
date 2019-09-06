import React, { Component } from 'react';
import '../Partials/repTemplates.scss';

class RepTemplates extends Component {
    render(){
        const { arrayData } = this.props;
        const repData = arrayData.map((oneRep, index) => {
            return(
            <div className="repGroup" key={index}>
                <h3 className="repName">{oneRep.name} is your {oneRep.elected_office} in the {oneRep.representative_set_name}</h3>
                <div className="repFlex">
                    <div className="repImageContainer">
                        <img src={oneRep.photo_url} alt="A photograph of the political representative."/>
                    </div>
                        <div className="repInfo">
                            <p>Learn more about {oneRep.first_name} <a href={oneRep.personal_url} target="_blank">here.</a></p>
                            <p>Contact: <span className="email">{oneRep.email}</span>
                            </p>
                            <p>Twitter: {oneRep.extra.twitter}</p>
                        </div>
                </div>
            </div>
            )
        })
        return(
            <div className="generatedReps wrapper">
                { repData }
            </div>
        )
    }
}
export default RepTemplates;