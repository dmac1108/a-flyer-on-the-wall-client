import React from 'react';
import {Link} from 'react-router-dom';
import './Flyer.css';

export default function Flyer (props){
    const childListItems = !props.childid ? '' : props.childid.map((childid) =>{
        const child = props.childList.filter(child => child.id === childid)
        return <dd key={childid}>{child[0].name}</dd>
    }) 
    
    return(
        <section className="flyer">
        <h2>{props.title}</h2>
        <img alt="Flyer Thumbnail" a-href={props.image}/>
        <dl>
            <div className="list-group">
                <dt>Event Date:</dt>
                <dd>{props.eventdate}</dd>
            </div>
            <div className="list-group">
                <dt>Action Date:</dt>
                <dd>{props.actiondate}</dd>
            </div>
            <div className="list-group">
                <dt>Action</dt>
                <dd>{props.action}</dd>
            </div>
            <div className="list-group">
                <dt>Category</dt>
                <dd>{props.category}</dd>
            </div>
            
                <dt>Children</dt>
                {childListItems}
           
        </dl>
        <Link to='/edit-flyer'><button>Edit</button></Link>
        <button>Delete</button>
     </section>
    )
}