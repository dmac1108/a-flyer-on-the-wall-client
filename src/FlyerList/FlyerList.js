import React, {Component} from 'react';
import {Link }  from 'react-router-dom'
import './FlyerList.css';
import FlyersContext from '../FlyersContext';
import Flyer from '../Flyer/Flyer';
import FilterSort from '../Filter-Sort/Filter-Sort';

class FlyerList extends Component{
    static defaultProps = {
        flyers: [],
        filterValue: '',
        childFilterValue: '',
        sortValue: ''
    }

    static contextType = FlyersContext;
    

    render(){
    const {flyers, filterValue, childFilterValue, sortValue} = this.context;

    let sortedList = flyers;
    
    if(sortValue !== null){
        if(sortValue === 'eventdate'){
            sortedList = flyers.sort((a,b) => new Date(a.eventdate) - new Date(b.eventdate))
            }
        else {
            sortedList = flyers.sort((a,b) => new Date(a.actiondate) - new Date(b.actiondate))
        }
    }
    
    let filteredList = sortedList;

    if(filterValue === 'all' && childFilterValue !== 'all')
    {
        filteredList = sortedList.filter((flyer) => flyer.childid.find((childid) => childid == childFilterValue) == childFilterValue)
    }
    else if(filterValue !== 'all' && childFilterValue === 'all'){
        filteredList = sortedList.filter((flyer) => flyer.category.toLowerCase() === filterValue.toLowerCase()) 
    }
    else if(filterValue !== 'all' && childFilterValue !== 'all'){

     filteredList = sortedList.filter((flyer) => flyer.category.toLowerCase() === filterValue.toLowerCase() && flyer.childid.find((childid) => childid == childFilterValue) == childFilterValue) 
    }
    
   
    const list = filteredList.map((flyer) =><li key={flyer.id}><Flyer id={flyer.id} title={flyer.title} image={flyer.image} eventdate={flyer.eventdate} actiondate={flyer.actiondate} action={flyer.action} category={flyer.category} childid={flyer.childid}/></li>);

    
    return(
        <div> 
        <FilterSort/>
        <section className="flyer-list">
            <Link to='/add-flyer' ><button>+ New Flyer</button></Link>
            <ul>
                {list}
            </ul>
    </section>
        </div>
    )
    }
}

export default FlyerList