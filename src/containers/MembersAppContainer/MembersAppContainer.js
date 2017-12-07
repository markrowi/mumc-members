import React, { Component } from 'react';
import FamilyContainer from '../../containers/FamilyContainer/FamilyContainer'


class MembersAppContainer extends Component {
    constructor(){
        super();
        this.state = {

        }
    }
    render(){
        return (
            <div>
                <FamilyContainer/>
            </div>
        )
    }
}

export default MembersAppContainer;