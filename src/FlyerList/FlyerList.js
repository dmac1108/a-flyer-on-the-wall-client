import React, {Component} from 'react';
import {Link }  from 'react-router-dom'
import './FlyerList.css';
import FlyersContext from '../FlyersContext';
import Flyer from '../Flyer/Flyer';
import FilterSort from '../Filter-Sort/Filter-Sort';

class FlyerList extends Component (){
    static contextType = FlyersContext;

    render(){
    const sortValue = this.context.sortValue;
    let sortedList = this.context.flyers;
    
    if(sortValue !== null){
        if(sortValue === 'eventdate'){
            sortedList = this.context.flyers.sort((a,b) => new Date(a.eventdate) - new Date(b.eventdate))
            }
        else {
            sortedList = this.context.flyers.sort((a,b) => new Date(a.actiondate) - new Date(b.actiondate))
        }
    }
    
    let filteredList = sortedList;
    if(this.context.filterValue !== null){
        
        filteredList = this.context.filterType === 'category' ? sortedList.filter((flyer) => flyer.category.toLowerCase() === this.context.filterValue.toLowerCase()) : sortedList.filter((flyer) => flyer.childid.find((childid) => childid==this.context.filterValue) == this.context.filterValue)
    }
    
    const list = filteredList.map((flyer) =><li key={flyer.id}><Flyer title={flyer.title} image={flyer.image} eventdate={flyer.eventdate} actiondate={flyer.actiondate} action={flyer.action} category={flyer.category} childid={flyer.childid} childList={this.context.children}/></li>);

    
    return(
        <div> 
        <FilterSort childList={this.context.children} filterChange={this.context.onFilterChange} sortChange={this.context.onSortChange}/>
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