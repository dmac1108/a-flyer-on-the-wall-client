import React from 'react';
import './Filter-Sort.css';

function FilterSort(props){
    const childOptions = props.childList.map((child) => 
        <option value={child.id}>{child.name}</option>
    )
    return(
        <section className="filter">
            <fieldset className="filter-group">
            <legend>Filter List by</legend>
            <div className="form-group">
                <label htmlFor="child-select">Select a Child</label>
                <select id="child-select" size="4" onChange={(e)=>props.filterChange('child',e.target.value)}>
                    {childOptions}
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="category-select">Select Catgory</label>
                <select id="category-select" onChange={(e)=>props.filterChange('category',e.target.value)}>
                <option value="school">School</option>
                <option value="scouts">Scouts</option>
        </select>
            </div>
                <button type="reset">Clear Filter</button>
            </fieldset> 
            <fieldset className="filter-group">
            <legend>Sort by</legend>
            <div className="form-group">
                <input id="eventdatesort" type="radio" name="sort" value="eventdate" onChange={(e)=>props.sortChange(e.target.value)}/>
                <label htmlFor="eventdatesort">Event Date</label>
            </div>
            <div className="form-group">
                <input id="actiondatesort" type="radio" name="sort" value="actiondate" onChange={(e)=>props.sortChange(e.target.value)}/>
                <label htmlFor="actiondatesort">Action Date</label>
            </div>
            </fieldset>
        </section>

    )
}

export default FilterSort