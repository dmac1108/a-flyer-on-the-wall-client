import React, {Component} from 'react';
import FlyersContext from '../../FlyersContext'
import './SignUp.css';
import FlyerApiService from '../../services/flyer-api-service'
import   ValidationError  from '../ValidationError/ValidationError'


class SignUp extends Component {

    state ={
        first: '',
        last: '',
        email: '',
        username: '',
        password: '',


    }
    static contextType  = FlyersContext

    onInputChange = (event) =>{
        const value = event.target.value;
        this.setState({
            ...this.state,
            [event.target.name]: value
            
        })
    }

    onSignUpSuccess = ()=>{
        
        this.props.history.push('/sign-in')
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const user = {
            firstname: this.state.first,
            lastname: this.state.last,
            email: this.state.email,
            username: this.state.username,
            user_password: this.state.password
        }
        
        FlyerApiService.postUser(user)
        

        this.setState({
            first: '',
            last: '',
            email: '',
            username: '',
            password: '',
            hideChildForm: false,
        })

        this.onSignUpSuccess()
    }

    validateFirstName(){
    
        const firstname = this.state.first;
        
        if(firstname === '' ){
            return 'A valid first name is required.'
        }
        return
    }
    validateLastName(){
    
        const lastname = this.state.last;
        
        if(lastname === '' ){
            return 'A valid last name is required.'
        }
        return
    }
    validateEmail(){
    
        const email = this.state.email;
        const emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        const newEmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

        if(!newEmailRegex.test(email)){
            return 'A valid email address is required.'
        }
        return
    }
    validateUsername(){
    
        const username = this.state.username;
        
        if(username === ''){
            return 'A username is required.'
        }
        return
    }
    validatePassword(){
    
        const password = this.state.password;
        const REGEX_UPPER_LOWER_NUMBER_SPECIAL = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&])[\S]+/

        if(!REGEX_UPPER_LOWER_NUMBER_SPECIAL.test(password) || password.length < 8){
            return 'The password must contain at least one uppercase, one lowercase, one special character and one number and must be at least eight characters long.'
        }

        return
    }

    render(){
    
    return(
        <section className="signup">
        <div >
        <form id="signup" onSubmit={(e) => this.handleSubmit(e)}>
            <fieldset className="signupform">
            <legend>Sign-Up</legend>
                <label htmlFor="first">Parent First Name</label> 
                <input name="first" id="first" type="text" required onChange={(e) => this.onInputChange(e)} value={this.state.first}/>
                <label htmlFor="last">Parent Last Name</label>
                <input name="last" id="last" type="text" required onChange={(e) => this.onInputChange(e)} value={this.state.last}/>
                <label htmlFor="email">Email Address</label>
                 <input name="email" id="email" type="text" required onChange={(e) => this.onInputChange(e)} value={this.state.email}/>
                 <label htmlFor="username">Username</label>
                <input name="username" id="usernmae" type="text" required onChange={(e) => this.onInputChange(e)} value={this.state.username}/>
                <label htmlFor="password">Password</label>
                <input name="password" id="password" type="password" required onChange={(e) => this.onInputChange(e)} value={this.state.password}/>

                <ValidationError message={this.validateFirstName()}/>
                <ValidationError message={this.validateLastName()}/>
                <ValidationError message={this.validateEmail()}/>
                <ValidationError message={this.validateUsername()}/>
                <ValidationError message={this.validatePassword()}/>
                <button type="submit">Submit</button>
            </fieldset>
        </form>
     </div>
     
     </section>
    );
    }
}

export default SignUp