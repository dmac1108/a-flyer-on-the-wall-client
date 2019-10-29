import React from 'react';
import './SignIn.css';

export default function () {
    return(
        <form  className="signin" id="signin">
        <label for="username">Username</label>
        <input id="usernmae" type="text" required/>
        <label for="password">Password</label>
        <input id="password" type="text" required/>
        <button type="submit">Submit</button>
     </form>
    )
}