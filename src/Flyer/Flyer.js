import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import FlyersContext from '../FlyersContext'
import './Flyer.css';
import AddToCalendar from 'react-add-to-calendar';
import moment from 'moment';


 class Flyer extends Component{
     
    static contextType = FlyersContext

    render(){
    const {id, title, image, eventstartdate, eventenddate, actiondate, action, category, childid} = this.props
      
    const {children} = this.context    
    const childListItems = !childid ? '' : childid.map((childid) =>{
        const child = children.filter(child => child.id == childid)
        return <dd key={childid}>{child[0].name}</dd>
    }) 
    
    const startTime = moment(eventstartdate).format();
    const endTime= moment(eventenddate).format()
    const description = `http://localhost:3000/flyers/${id}`
    const event = {
            title: title,
            description: description,
            startTime: startTime,
            endTime: endTime,
        }
    
    return(
        <div className="flyer">
        <h2>{title}</h2>
        <img alt="Flyer Thumbnail" src={image}/>
        <dl>
            <div className="list-group">
                <dt>Event Start Date/Time:</dt>
                <dd>{moment(eventstartdate).format('MMMM Do YYYY, h:mm:ss a')}</dd>
                {/*<dd>{new Date(eventdate).toString().substring(0,10)}</dd>*/}
            </div>
            <div className="list-group">
                <dt>Event End Date/Time:</dt>
                <dd>{moment(eventenddate).format('MMMM Do YYYY, h:mm:ss a')}</dd>
                {/*<dd>{new Date(eventdate).toString().substring(0,10)}</dd>*/}
            </div>
            <div className="list-group">
                <dt>Action Date:</dt>
                <dd>{new Date(actiondate).toString().substring(0,10)}</dd>
            </div>
            <div className="list-group">
                <dt>Action:</dt>
                <dd>{action}</dd>
            </div>
            <div className="list-group">
                <dt>Category:</dt>
                <dd>{category}</dd>
            </div>
            
                <dt>Children:</dt>
                {childListItems}
           
        </dl>
        
        <AddToCalendar event={event} buttonWrapperClass="add-to-calendar"/>
    
        <Link to={`/edit-flyer/${id}`}><button>Edit</button></Link>
        <button onClick={()=>this.context.onDeleteFlyer(id)}>Delete</button>
     </div>
    )
    }
}

export default Flyer