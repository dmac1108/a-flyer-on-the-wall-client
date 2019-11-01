import React, {Component} from 'react';
import './Filter-Sort.css';
import FlyersContext from '../FlyersContext'

class FilterSort extends Component{
    static contextType = FlyersContext;

    render(){
    const childOptions = this.context.children.map((child) => 
        <option key={child.id} value={child.id}>{child.name}</option>
    )
    return(
        <section className="filter">
            <fieldset className="filter-group">
            <legend>Filter List by</legend>
            <div className="form-group">
                <label htmlFor="child-select">Select a Child</label>
                <select id="child-select" size="2" defaultValue="all" onChange={(e)=>this.context.onChildFilterChange(e.target.value)} value={this.context.childFilterValue}>
                <option key="all" value="all">All</option>
                    {childOptions}
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="category-select">Select Catgory</label>
                <select defaultValue="all" id="category-select" onChange={(e)=>this.context.onFilterChange('category',e.target.value)} value={this.context.filterValue}>
                <option value="all">All</option>
                <option value="school">School</option>
                <option value="scouts">Scouts</option>
        </select>
            </div>
    
            </fieldset> 
            <fieldset className="filter-group">
            <legend>Sort by</legend>
            <div className="form-group">
                <input id="eventdatesort" type="radio" name="sort" value="eventdate" onChange={(e)=>this.context.onSortChange(e.target.value)}/>
                <label htmlFor="eventdatesort">Event Date</label>
            </div>
            <div className="form-group">
                <input id="actiondatesort" type="radio" name="sort" value="actiondate" onChange={(e)=>this.context.onSortChange(e.target.value)}/>
                <label htmlFor="actiondatesort">Action Date</label>
            </div>
            </fieldset>
        </section>

    )
    }
}

export default FilterSort