import config from '../config'
import React, {Component} from 'react';
import FlyersContext from '../FlyersContext'
import {Link} from 'react-router-dom'
import './SignUp.css';


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

    

    handleSubmit = (e) => {
        e.preventDefault();

        const user = {
            firstname: this.state.first,
            lastname: this.state.last,
            email: this.state.email,
            username: this.state.username,
            user_password: this.state.password
        }
        const url = `${config.API_ENDPOINT}/users`
        fetch(url,{
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(user),
        })
        .then((res)=>{
            if(!res.ok){
                throw new Error(res.status)
            }
            res.json()

        })
        .then((user)=>{
            console.log(user)
            this.context.onAddUser(user)
        })

        this.setState({
            first: '',
            last: '',
            email: '',
            username: '',
            password: '',
            hideChildForm: false,
        })
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
                <input name="password" id="password" type="text" required onChange={(e) => this.onInputChange(e)} value={this.state.password}/>
                <button type="submit">Submit</button>
            </fieldset>
        </form>
     </div>
     <div className="signup">
        <Link to='/add-child'><button type="button">Add Child</button></Link>
        
        </div>
     </section>
    );
    }
}

export default SignUp