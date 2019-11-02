import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import FlyersContext from '../FlyersContext'
import './Flyer.css';

 class Flyer extends Component{
     
    static contextType = FlyersContext

    render(){
    const {id, title, image, eventdate, actiondate, action, category, childid} = this.props
      
    const {children} = this.context    
    const childListItems = !childid ? '' : childid.map((childid) =>{
        const child = children.filter(child => child.id == childid)
        return <dd key={childid}>{child[0].name}</dd>
    }) 
    
   
    
    return(
        <div className="flyer">
        <h2>{title}</h2>
        <img alt="Flyer Thumbnail" src={image}/>
        <dl>
            <div className="list-group">
                <dt>Event Date:</dt>
                <dd>{new Date(eventdate).toString().substring(0,10)}</dd>
            </div>
            <div className="list-group">
                <dt>Action Date:</dt>
                <dd>{new Date(actiondate).toString().substring(0,10)}</dd>
            </div>
            <div className="list-group">
                <dt>Action</dt>
                <dd>{action}</dd>
            </div>
            <div className="list-group">
                <dt>Category</dt>
                <dd>{category}</dd>
            </div>
            
                <dt>Children</dt>
                {childListItems}
           
        </dl>
        <Link to={`/edit-flyer/${id}`}><button>Edit</button></Link>
        <button onClick={()=>this.context.onDeleteFlyer(id)}>Delete</button>
     </div>
    )
    }
}

export default Flyer