import React, {Component} from 'react';
import FlyersContext from '../../FlyersContext'
import './SignUp.css';
import FlyerApiService from '../../services/flyer-api-service'
import   ValidationError  from '../ValidationError/ValidationError'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {library} from '@fortawesome/fontawesome-svg-core'
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons'

library.add(faPaperPlane);

class SignUp extends Component {

    state ={
        first: {
            value: '',
            touched: false,
        },
        last: {
            value: '',
            touched: false,
        },
        email: {
            value: '',
            touched: false,
        },
        username: {
            value: '',
            touched: false,
        },
        password: {
            value: '',
            touched: false,
        },
        error: false,
        errorMessage: '',
        

    }
    static contextType  = FlyersContext

    onInputChange = (event) =>{
        const value = event.target.value;
        this.setState({
            ...this.state,
            [event.target.name]: {
                value:value,
                touched: true}
            
        })
    }

    onSignUpSuccess = ()=>{
        
        this.props.history.push('/sign-in')
    }

    onSignUpFailure = (error)=>{
        
        this.setState({
            error: true,
            errorMessage: error,
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if(this.validateEmail()){
            this.setState({
                error: true,
                errorMessage: this.validateEmail() 
            })
            return
        }

        if(this.validatePassword()){
            this.setState({
                error: true,
                errorMessage: this.validatePassword()
            })
            return
        }
        const user = {
            firstname: this.state.first.value,
            lastname: this.state.last.value,
            email: this.state.email.value,
            username: this.state.username.value,
            user_password: this.state.password.value
        }
        
        FlyerApiService.postUser(user)
        .then((res)=>{
            
            if(!res.ok)
            {
                res.json()
                .then(e=>Promise.reject(e))
                .catch(error => this.onSignUpFailure(error.error))
            }
            else{
                res.json()
                this.setState({
                    first: {value: '', touched: false},
                    last: {value: '', touched: false},
                    email: {value: '', touched: false},
                    username: {value: '', touched: false},
                    password: {value: '', touched: false},
                    
                })
        
                this.onSignUpSuccess()

            }

           
        })
         .catch(error => this.onSignUpFailure(error.error))
        
        

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
    
        const email = this.state.email.value;
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
    
        const password = this.state.password.value;
        const REGEX_UPPER_LOWER_NUMBER_SPECIAL = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&])[\S]+/
        
        if(!REGEX_UPPER_LOWER_NUMBER_SPECIAL.test(password) || password.length < 8){
            return 'The password must contain at least one uppercase, one lowercase, one special character and one number and must be at least eight characters long.'
        }

        return
    }

    render(){
    
    return(
        <section className="signup">
        
        <form id="signup" className="signupform" onSubmit={(e) => this.handleSubmit(e)}>
            <fieldset className="signupform-fieldset">
            <legend>Sign-Up!</legend>
                
                    <label htmlFor="first">Parent First Name</label> 
                    <input name="first" id="first" type="text" required onChange={(e) => this.onInputChange(e)} value={this.state.first.value}/>
                
                
                    <label htmlFor="last">Parent Last Name</label>
                    <input name="last" id="last" type="text" required onChange={(e) => this.onInputChange(e)} value={this.state.last.value}/>
                
                
                    <label htmlFor="email">Email Address</label>
                    <input name="email" id="email" type="text" required onChange={(e) => this.onInputChange(e)} value={this.state.email.value}/>
                 
                 
                 
                    <label htmlFor="username">Username</label>
                    <input name="username" id="usernmae" type="text" required onChange={(e) => this.onInputChange(e)} value={this.state.username.value}/>
                
                
                    <label htmlFor="password">Password</label>
                    <input name="password" id="password" type="password" required onChange={(e) => this.onInputChange(e)} value={this.state.password.value}/>
                
                {this.state.first.touched && <ValidationError message={this.validateFirstName()}/>}
                {this.state.last.touched && <ValidationError message={this.validateLastName()}/>}
                {this.state.username.touched && <ValidationError message={this.validateUsername()}/>}
                {this.state.error && <ValidationError message={this.state.errorMessage}/>}
                
                <button className="signup-button" type="submit" title="Submit" disabled={this.validateFirstName() || this.validateLastName() ||  this.validateUsername()}><FontAwesomeIcon icon="paper-plane"/></button>
            </fieldset>
        </form>
     
     
     </section>
    );
    }
}

export default SignUp