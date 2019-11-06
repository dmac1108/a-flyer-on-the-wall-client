import React, {Component} from 'react';
import AddToCalendar from 'react-add-to-calendar';
import FlyersContext from '../FlyersContext'
import moment from 'moment'

class UploadToCalendar extends Component {
    static contextType = FlyersContext

    render(){
        const eventid = this.props.match.params.id
        const flyer = this.context.flyers.filter((flyer) => flyer.id == eventid)
        const event = {
            title: flyer.title,
            description: flyer.title,
            startTime: moment.format(flyer.eventdate)
        }
        
        return(
            <AddToCalendar event={event}/>
        )
    }
}

export default UploadToCalendar

