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
                <li><Link onClick={this.handleLogoutClick}
                to='/'>
                    Logout
                </Link></li>
            </div>
        )
    }

    renderLoginLink(){
        return (
            <div className='Nav__not-logged-in'>
                <li><Link 
                to='/sign-in'>
                    Sign-In
                </Link></li>
                <li><Link 
                to='/sign-up'>
                    Sign-Up
                </Link></li>
            </div>
        )
    }
    render(){
    return(
        <nav>
            <Link to='/'><h1>A Flyer on the Wall</h1></Link>
             <ul>
                 <li><NavLink to='/flyers'>Demo</NavLink></li>
                {TokenService.hasAuthToken() ? this.renderLogoutLink() : this.renderLoginLink()}
            </ul>
            
        </nav>
    );
    }

}

export default Nav