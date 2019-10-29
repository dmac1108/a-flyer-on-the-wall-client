import React from 'react';
import {Link }  from 'react-router-dom'
import './FlyerList.css';
import Flyer from '../Flyer/Flyer';
import FilterSort from '../Filter-Sort/Filter-Sort';

export default function FlyerList (props){

    const sortValue = props.sort;
    let sortedList = props.flyersList;
    console.log(sortedList);
    if(sortValue !== null){
        if(sortValue === 'eventdate'){
            sortedList = props.flyersList.sort((a,b) => new Date(a.eventdate) - new Date(b.eventdate))
            }
        else {
            sortedList = props.flyersList.sort((a,b) => new Date(a.actiondate) - new Date(b.actiondate))
        }
    }
    
    let filteredList = sortedList;
    if(props.filter !== null){

        filteredList = props.filterType === 'category' ? sortedList.filter((flyer) => flyer.category === props.filter) : sortedList.filter((flyer) => flyer.child === props.filter) 
    }
    
    const list = filteredList.map((flyer) =><li key={flyer.id}><Flyer title={flyer.title} image={flyer.image} eventdate={flyer.eventdate} actiondate={flyer.actiondate} action={flyer.action} category={flyer.category} childid={flyer.childid} childList={props.childList}/></li>);

    
    return(
        <div> 
        <FilterSort filterChange={props.filterChange}/>
        <section className="flyer-list">
            <Link to='/add-flyer'><button>+ New Flyer</button></Link>
            <ul>
                {list}
            </ul>
        </section>
        </div>
    )
}

