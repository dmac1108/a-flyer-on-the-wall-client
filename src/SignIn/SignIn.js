import React, {Component} from 'react';
import './SignIn.css';
import TokenService from '../services/token-service';
import AuthApiService from '../services/auth-api-service';

class SignIn extends Component {
    state={
        username: '',
        password: '',
    }

    onInputChange = (event) =>{
        const value = event.target.value;
        this.setState({
            ...this.state,
            [event.target.name]: value
            
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
            TokenService.saveAuthToken(res.authToken)

        })
    }
    
    render(){
    return(
        <form  className="signin" id="signin" onSubmit={this.handleSubmitJwtAuth}>
        <label htmlFor="username">Username</label>
        <input name="username" id="usernmae" type="text" required onChange={(e) => this.onInputChange(e)} value={this.state.username}/>
        <label htmlFor="password">Password</label>
        <input name="password" id="password" type="text" required onChange={(e) => this.onInputChange(e)} value={this.state.password}/>
        <button type="submit">Sign-In</button>
     </form>
    )
    }
}

export default SignIn