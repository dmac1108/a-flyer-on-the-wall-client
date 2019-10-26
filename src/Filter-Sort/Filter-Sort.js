import React from 'react'

function FilterSort(){
    return(
        <section>
            <p>Filter List</p>
                <input id="student" type="radio" name="filter" value="student"/>
                <label for="student">Student</label>
                <input id="category" type="radio" name="filter" value="category"/>
                <label for="category">Category</label>
                <button type="reset">Clear Filter</button>
            <p>Sort by</p>
                <input id="eventdatesort" type="radio" name="sort" value="eventdate"/>
                <label for="eventdatesort">Event Date</label>
                <input id="actiondatesort" type="radio" name="sort" value="actiondate"/>
                <label for="actiondatesort">Action Date</label>
        </section>

    )
}

export default FilterSort