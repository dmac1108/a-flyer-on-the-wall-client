import React, {Component} from 'react';
import './SignIn.css';
import TokenService from '../../services/token-service';
import AuthApiService from '../../services/auth-api-service';
import FlyersContext from '../../FlyersContext'
import ValidationError from '../ValidationError/ValidationError'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {library} from '@fortawesome/fontawesome-svg-core'
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons'

library.add(faPaperPlane);


class SignIn extends Component {
    state={
        username: '',
        password: '',
        error: false,
        errormessage: '',
    }
    
    static contextType = FlyersContext;

    onInputChange = (event) =>{
        const value = event.target.value;
        this.setState({
            ...this.state,
            [event.target.name]: value
            
        })
    }

    onLoginSuccess = ()=>{
        this.props.history.push('/flyers')
        
    } 

    onLoginFailure =(error)=>{
        
        this.setState({
            error: true,
            errormessage: error
        })
    }

    handleSubmitJwtAuth = ev =>{
        ev.preventDefault()
        this.setState({error: null})

        AuthApiService.postLogin({
            username: this.state.username,
            user_password: this.state.password,
        })
        .then(res => {
            this.setState({
                username: '',
                password: '',
            })
            const tokenPromise = new Promise((resolve, reject)=>{
                resolve(TokenService.saveAuthToken(res.authToken))
            })
            tokenPromise.then(this.onLoginSuccess())
            .catch(error => this.onLoginFailure(error.error))
            
            
        })
        .catch(error => this.onLoginFailure(error.error))
        
    }

   
    
    render(){
    return(
        <form  className="signin" id="signin" onSubmit={this.handleSubmitJwtAuth}>
        <label htmlFor="username">Username</label>
        <input name="username" id="username" type="text" required onChange={(e) => this.onInputChange(e)} value={this.state.username}/>
        <label htmlFor="password">Password</label>
        <input name="password" id="password" type="password" required onChange={(e) => this.onInputChange(e)} value={this.state.password}/>
        {this.state.error && <ValidationError message={this.state.errormessage}/>}
        <button type="submit" title="Sign-In"><FontAwesomeIcon icon="paper-plane"/></button>
     </form>
    )
    }
}

export default SignIn