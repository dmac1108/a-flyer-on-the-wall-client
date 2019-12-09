import React, {Component} from 'react';
import './Filter-Sort.css';
import FlyersContext from '../../FlyersContext'

class FilterSort extends Component{
    static contextType = FlyersContext;

    render(){
    let childOptions    
    if(this.context.children){
    childOptions = this.context.children.map((child) => 
        <option key={child.id} value={child.id}>{child.childname}</option>
    )}
    
    const categoryOptions = this.context.categories.map((category) => <option key={category.category} value={category.category}>{category.category}</option>)
    return(
        <section className="filter">
            <fieldset className="filter-group">
            <legend>Filter by</legend>
            <div className="form-group">
                <label htmlFor="child-select">Child </label>
                <select id="child-select" onChange={(e)=>this.context.onChildFilterChange(e.target.value)} value={this.context.childFilterValue}>
                <option key="all" value="all">All</option>
                    {childOptions}
                </select>
                <label htmlFor="category-select">Category </label>
                <select id="category-select" onChange={(e)=>this.context.onFilterChange(e.target.value)} value={this.context.filterValue}>
                <option value="all">All</option>
                {categoryOptions}
            </select>
            </div>
    
            </fieldset> 
            <fieldset className="form-group">
            <legend>Sort by</legend>
            <div className="form-group">
                <div className="radio-button">
                    <input id="eventdatesort" type="radio" name="sort" value="eventdate" onChange={(e)=>this.context.onSortChange(e.target.value)} checked={this.context.sortValue === 'eventdate'}/>
                    <label htmlFor="eventdatesort">Event Date</label>
                </div>
                <div className="radio-button">
                    <input id="actiondatesort" type="radio" name="sort" value="actiondate" onChange={(e)=>this.context.onSortChange(e.target.value)} checked={this.context.sortValue === 'actiondate'}/>
                    <label htmlFor="actiondatesort">Action Date</label>
                </div>
            </div>
            </fieldset>
        </section>

    )
    }
}

export default FilterSort