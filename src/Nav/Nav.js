import React, {Component} from 'react'
import {NavLink, Link} from 'react-router-dom'
import './Nav.css'
import TokenService from '../services/token-service'

class Nav extends Component{

    handleLogoutClick = () => {
        TokenService.clearAuthToken()
    }

    renderLogoutLink(){
        return (
            <div className='Nav__logged-in'>
                <Link onClick={this.handleLogoutClick}
                to='/'>
                    Logout
                </Link>
            </div>
        )
    }

    renderLoginLink(){
        return (
            <div className='Nav__not-logged-in'>
                <Link 
                to='/sign-in'>
                    Sign-In
                </Link>
                <Link 
                to='/sign-up'>
                    Sign-Up
                </Link>
            </div>
        )
    }
    render(){
    return(
        <nav>
            <Link to='/'><h1>A Flyer on the Wall</h1></Link>
             <ul>
                 <li><NavLink to='/flyers'>Demo</NavLink></li>
                <li>{TokenService.hasAuthToken() ? this.renderLogoutLink() : this.renderLoginLink()}</li>
            </ul>
            
        </nav>
    );
    }

}

export default Nav