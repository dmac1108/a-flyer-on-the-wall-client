import React from 'react';
import './LandingPage.css';
import SignUp from '../SignUp/SignUp';
import {Link} from 'react-router-dom'

export default function(){

    return(
    <div className="landing">
    <section>
        <p>View all of those loose pieces of paper in one place - and -  Keep track of when you need to take action!</p>
        <img alt="Flyers screenshot" src={require('../../assets/Flyers_screenshot.png')}/>
    </section>
    <section>
        <p>Upload it, recycle it, DON'T forget about it </p>
        <img alt="Upload Screenshot" src={require('../../assets/New_Flyer.png')}/>
     </section>
     <section>
         <p>Sign Up now and start adding your flyers to the wall!</p>
         <Link to='/sign-up'>Sign Me Up!</Link>
     </section>
     </div>
    )
}