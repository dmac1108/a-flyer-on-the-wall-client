import React, {Component} from 'react'
import './AddFlyer.css'
import FlyerForm from '../FlyerForm/FlyerForm'

class AddFlyer extends Component {

    render(){
        return(
            <FlyerForm submissionType='add'/>
        )
    }
}

export default AddFlyer