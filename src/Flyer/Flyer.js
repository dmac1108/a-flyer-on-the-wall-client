import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import FlyersContext from '../FlyersContext'
import './Flyer.css';
import AddToCalendar from 'react-add-to-calendar';
import moment from 'moment';


 class Flyer extends Component{
     
    static contextType = FlyersContext

    render(){
    const {id, title, image, eventdate, actiondate, action, category, childid} = this.props
      
    const {children} = this.context    
    const childListItems = !childid ? '' : childid.map((childid) =>{
        const child = children.filter(child => child.id == childid)
        return <dd key={childid}>{child[0].name}</dd>
    }) 
    
    const startTime = moment(eventdate).format();
    const timeNow = moment().format();
    const startHours = new Date(startTime).getHours()
    console.log(startHours)
    const endTime = new Date(startTime).setHours(startHours +2)

    console.log(startTime)
    console.log(timeNow)
    const event = {
            title: title,
            description: title,
            startTime: new Date(startTime),
            endTime: moment(endTime).format(),
        }
        console.log(event);
    
    return(
        <div className="flyer">
        <h2>{title}</h2>
        <img alt="Flyer Thumbnail" src={image}/>
        <dl>
            <div className="list-group">
                <dt>Event Date:</dt>
                <dd>{moment(eventdate).format('MMMM Do YYYY, h:mm:ss a')}</dd>
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