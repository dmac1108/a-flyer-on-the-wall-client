import React from 'react';
import './SignUp.css';

export default function (){
    return(

        <form className="signup" id="signup">
            <label for="first">First Name</label> 
            <input id="first" type="text" required/>
            <label for="last">Last Name</label>
             <input id="last" type="text" required/>
             <label for="email">Email Address</label>
             <input id="email" type="text" required/>
             <label for="username">Username</label>
            <input id="usernmae" type="text" required/>
            <label for="password">Password</label>
            <input id="password" type="text" required/>
            <button type="submit">Submit</button>
        
     </form>
    )
}