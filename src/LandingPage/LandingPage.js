import React from 'react';
import './LandingPage.css';
import SignUp from '../SignUp/SignUp';

export default function(){

    return(
    <div className="landing">
    <section>
        <p>View all of those loose pieces of paper in one place - and -  Keep track of when you need to take action!</p>
        <p>[placeholder for screenshot of flyers list]</p>
    </section>
    <section>
        <p>Upload it, recycle it, DON'T forget about it </p>
        <p>[placeholder for screenshot of flyers upload]</p>
     </section>
     <section>
         <p>Sign Up now and start adding your flyers to the wall!</p>
         <SignUp/>
     </section>
     </div>
    )
}