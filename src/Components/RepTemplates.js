import React, { Component } from 'react';

class RepTemplates extends Component {
    render(){
        const { arrayData } = this.props;
        const repData = arrayData.map(oneRep => {
            return(
            <div className="repGroup">
                    <h3>{oneRep.name} is your {oneRep.elected_office} for {oneRep.district_name}</h3>
                <h3>hello{oneRep.email}</h3>
            </div>
            )
        })
        return(
            <div className="anotherOne">
                { repData }
            </div>
        )
    }
}
export default RepTemplates;