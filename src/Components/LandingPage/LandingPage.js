import React from 'react';
import './LandingPage.css';
import {Link} from 'react-router-dom'

export default function(){

    return(
    <div className="landing">
    <section className="landing-section">
        <p>View all of those loose pieces of paper in one place - and -  Keep track of when you need to take action!</p>
        <img className="landing-image" alt="Flyers screenshot" src={require('../../assets/Flyers-Screenshot.png')}/>
    </section>
    <section className="landing-section">
        <p>Easily filter and sort the list of flyers to see exactly what you need. </p>
        <img className="landing-image" alt="Upload Screenshot" src={require('../../assets/Filter-Screenshot.png')}/>
     </section>
    <section className="landing-section">
        <p>Upload it, recycle it, DON'T forget about it. </p>
        <img className="landing-image" alt="Upload Screenshot" src={require('../../assets/FlyerForm-Screenshot.png')}/>
     </section>

     
     <section className="landing-section">
         <p>Try the demo application! <Link className="flyer-link" to='/sign-in'>Sign-In</Link> and use the following user to access the demo:</p>
            <p>username: jsmith</p> 
            <p>password: apassword</p> 
         
         
     </section>
     <section className="landing-section">
         <p>Or, Sign-Up now and start adding your own flyers to the wall!</p>
         <Link className="flyer-link" to='/sign-up'>Sign Me Up!</Link>
     </section>
     </div>
    )
}