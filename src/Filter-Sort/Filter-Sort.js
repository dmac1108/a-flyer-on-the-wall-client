import React from 'react';
import './Filter-Sort.css';

function FilterSort(props){

    return(
        <section className="filter">
            <fieldset className="filter-group">
            <legend>Filter List by</legend>
            <div className="form-group">
                <label htmlFor="child-select">Select One or More Children</label>
                <select id="child-select" multiple size="4">
                    <option value="all">All</option>
                    <option value="child1">Child 1</option>
                    <option value="child2">Child 2</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="category-select">Select Catgory</label>
                <select id="category-select" onChange={props.filterChange('category',this.value)}>
                <option value="school">School</option>
                <option value="scouts">Scouts</option>
        </select>
            </div>
                <button type="reset">Clear Filter</button>
            </fieldset> 
            <fieldset className="filter-group">
            <legend>Sort by</legend>
            <div className="form-group">
                <input id="eventdatesort" type="radio" name="sort" value="eventdate"/>
                <label htmlFor="eventdatesort">Event Date</label>
            </div>
            <div className="form-group">
                <input id="actiondatesort" type="radio" name="sort" value="actiondate"/>
                <label htmlFor="actiondatesort">Action Date</label>
            </div>
            </fieldset>
        </section>

    )
}

export default FilterSort