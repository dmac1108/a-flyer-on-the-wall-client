import config from '../config'
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import FlyersContext from '../FlyersContext'
import './Flyer.css';
import AddToCalendar from 'react-add-to-calendar';
import moment from 'moment';


 class Flyer extends Component{

    static contextType = FlyersContext
    
    render(){
    const {id, title, location, image, eventstartdate, eventenddate, actiondate, action, category} = this.props
    const {flyers_children, children} = this.context  
    
    const flyer_children = flyers_children.filter((flyer_child)=>
        flyer_child.flyerid === id
    )
    let childrenList;

    if(flyers_children){
        const childrenToList = flyer_children.map((flyer_child) => children.find(child => child.id === flyer_child.childid))

        childrenList = childrenToList.map((flyerchild)=> <dd key={flyerchild.id}>{flyerchild.childname}</dd>)
        
    }
    
    const startTime = moment(eventstartdate).format();
    const endTime= moment(eventenddate).format()
    const description = `${config.API_ENDPOINT}/${id}`
    const event = {
            title: title,
            location: location,
            description: description,
            startTime: startTime,
            endTime: endTime,
        }
    
    const imageBase64String = atob(image)
    
    return(
        <div className="flyer">
        <h2>{title}</h2>
   
        <img alt="Flyer Thumbnail" src={imageBase64String}/>
        <dl>
            <div className="list-group">
                <dt>Location:</dt>
                <dd>{location}</dd>
            </div>
            <div className="list-group">
                <dt>Event Start Date/Time:</dt>
                <dd>{moment(eventstartdate).format('MMMM Do, h:mm a')}</dd>
                {/*<dd>{new Date(eventdate).toString().substring(0,10)}</dd>*/}
            </div>
            <div className="list-group">
                <dt>Event End Date/Time:</dt>
                <dd>{moment(eventenddate).format('MMMM Do, h:mm a')}</dd>
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
                {childrenList}
           
        </dl>
        
        <AddToCalendar event={event} buttonWrapperClass="add-to-calendar"/>
    
        <Link to={`/edit-flyer/${id}`}><button>Edit</button></Link>
        <button onClick={()=>this.context.onDeleteFlyer(id)}>Delete</button>
     </div>
    )
    }
}

export default Flyer