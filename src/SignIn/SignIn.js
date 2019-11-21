import React, {Component} from 'react';
import './SignIn.css';
import TokenService from '../services/token-service';

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

    handleSubmitBasicAuth = ev =>{
        ev.preventDefault()
        const username = this.state.username
        const password = this.state.password
        TokenService.saveAuthToken(
            TokenService.makeBasicAuthToken(username, password)
        )
        this.setState = ({
            username: '',
            password: '',
        })
        this.props.history.push('/flyers')
    }
    
    render(){
    return(
        <form  className="signin" id="signin" onSubmit={this.handleSubmitBasicAuth}>
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