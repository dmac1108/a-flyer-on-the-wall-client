import React from 'react'
import './FlyerExpandedView.css'

export default function(props){
    return(
        <div className="large-flyer">
            <img alt="Large Flyer" src={props.match.params.image}/>
            <button type="reset">Back</button>
        </div>
        
    )
}