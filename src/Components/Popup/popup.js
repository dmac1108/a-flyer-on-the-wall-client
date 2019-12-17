import React, {Component} from 'react';
import './popup.css';
import FlyersContext from '../../FlyersContext';

class Popup extends Component{
    static contextType = FlyersContext
    
    render(){


        return (
            <div className='popup'>
                <div className='popup-inner'>
                    <h1>Are you sure you want to delete the flyer?</h1>
                    <button type="submit" onClick={console.log('Yes clicked')}>Yes</button>
                    <button type="cancel">No</button>
                </div>
            </div>
        )
    }
}

export default Popup;