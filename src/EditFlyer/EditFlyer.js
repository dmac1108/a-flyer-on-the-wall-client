import React from 'react';
import './EditFlyer.css';

export default function () {
    return(
        <form className="editflyer" id="editflyer">
       <label for="title">Title</label> 
       <input id="title" type="text" required/>
       <label for="imgfile">Flyer Image</label>
       <input id="last" type="file" accept="image/*, .pdf" required/>
       <label for="eventdate">Event Date</label>
       <input id="eventdate" type="datetime" required/>
       <label for="actiondate">Action Date</label>
       <input id="actiondate" type="datetime"/>
       <label for="actiontype">Action</label>
       <input id="actiontype" type="text"/>
       <label for="category-select">Select Catgory</label>
       <select id="category-select">
         <option value="school">School</option>
         <option value="scouts">Scouts</option>
        </select>
        <label for="student-select">Select One or More Students</label>
        <select id="student-select" multiple size="4">
            <option value="all">All</option>
            <option value="student1">Student 1</option>
            <option value="student2">Student 2</option>
        </select>
       <button type="submit">Submit</button>
       <button type="reset">Cancel</button>
    </form>
    )
}