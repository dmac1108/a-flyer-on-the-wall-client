import React, {Component} from 'react';
import FlyerForm from '../FlyerForm/FlyerForm'
import './EditFlyer.css';

class EditFlyer extends Component{
    render(){
        return(
            <FlyerForm submissionType='edit' flyerid={this.props.match.params.flyerid}/>
        )
    }
}

export default EditFlyer