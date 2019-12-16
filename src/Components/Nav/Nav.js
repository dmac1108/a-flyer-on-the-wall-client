import React, {Component} from 'react'
import {NavLink, Link} from 'react-router-dom'
import './Nav.css'
import TokenService from '../../services/token-service'
import Logo from '../../assets/android-chrome-512x512.png'

class Nav extends Component{

    handleLogoutClick = () => {
        TokenService.clearAuthToken()
    }

    renderLogoutLink(){
        return (
            <div className='Nav__logged-in'>
                {/* <li><NavLink to='/flyers'>Flyers</NavLink></li> */}
                <li><Link className="flyer-link" onClick={this.handleLogoutClick}
                to='/'>
                    Logout
                </Link></li>
            </div>
        )
    }

    renderLoginLink(){
        return (
            <div className='Nav__not-logged-in'>
                <li><Link className="flyer-link"
                to='/sign-in'>
                    Sign-In
                </Link></li>
                <li><Link className="flyer-link"
                to='/sign-up'>
                    Sign-Up
                </Link></li>
            </div>
        )
    }
    render(){
    return(
        <nav>
            <NavLink to='/'><img className="nav-logo" src={Logo}/><h1>A Flyer on the Wall</h1></NavLink>
            
             <ul>
                 
                {TokenService.hasAuthToken() ? this.renderLogoutLink() : this.renderLoginLink()}
            </ul>
            
        </nav>
    );
    }

}

export default Nav