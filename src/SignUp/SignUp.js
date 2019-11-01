import React from 'react';
import './SignUp.css';

export default function (){
    return(

        <form className="signup" id="signup">
            <label htmlFor="first">First Name</label> 
            <input id="first" type="text" required/>
            <label htmlFor="last">Last Name</label>
             <input id="last" type="text" required/>
             <label htmlFor="email">Email Address</label>
             <input id="email" type="text" required/>
             <label htmlFor="username">Username</label>
            <input id="usernmae" type="text" required/>
            <label htmlFor="password">Password</label>
            <input id="password" type="text" required/>
            <button type="submit">Submit</button>
        
     </form>
    )
}