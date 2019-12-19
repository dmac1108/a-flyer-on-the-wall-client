import React, {Component} from 'react';
import './popup.css';
import FlyersContext from '../../FlyersContext';


class Popup extends Component{
    static contextType = FlyersContext
    
    onClose = e => {
        this.props.onClose && this.props.onClose(e);
    };
    
    onClickYes = e => {
        this.props.onClickYes && this.props.onClickYes(this.props.flyer);
    };

 
    render(){


        return (
            <div className='popup'>
                <div className='popup-inner'>
                <h1>Are you sure?</h1>
                    <div className="popup-buttons">
                        <button type="submit" onClick={this.onClickYes}>Yes</button>
                        <button type="cancel" onClick={this.onClose}>No</button>

                    </div>
                    
                </div>
             </div>
        )
    }
}


export default Popup;