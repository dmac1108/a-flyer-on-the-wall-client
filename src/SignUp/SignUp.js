import React, {Component} from 'react';
import FlyersContext from '../FlyersContext'
import './SignUp.css';

class SignUp extends Component {

    state ={
        first: '',
        last: '',
        email: '',
        username: '',
        password: '',
        hideChildForm: true,
        childName: '',

    }
    static contextType  = FlyersContext

    onInputChange = (event) =>{
        console.log(event.target.value)
        console.log(event.target.name)
        const value = event.target.value;
        this.setState({
            ...this.state,
            [event.target.name]: value
            
        })
    }

    handleAddChildForm = (e) =>{
        e.preventDefault()
        
        
    }
    handleAddChild = (e) =>{
        e.preventDefault()
        this.context.onAddChild(e.target.value)
        this.setState({
            childName: '',
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const user = {
            first: this.state.first,
            last: this.state.last,
            email: this.state.email,
            username: this.state.username,
            password: this.state.password
        }

        this.context.onAddUser(user)

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
        <section>
            <div hidden={!this.state.hideChildForm}>
        <form id="signup" onSubmit={(e) => this.handleSubmit(e)}>
            <fieldset className="signup">
            <legend>Sign-Up</legend>
                <label htmlFor="first">First Name</label> 
                <input name="first" id="first" type="text" required onChange={(e) => this.onInputChange(e)} value={this.state.first}/>
                <label htmlFor="last">Last Name</label>
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
     <div  hidden={this.state.hideChildForm}>
        <button type="button" onClick={()=>{this.handleAddChildForm()}}>Add Child</button>
        <form  className="addChild" onSubmit={(e)=>this.handleAddChild(e)}>
            <legend>Add Child</legend>
            <label htmlFor="add-child">Name</label>
            <input type="text" id="add-child"  value={this.state.childName}/>
            <button type="submit">Add</button>
        </form>
            <button className="done" type="submit" onChange={()=>this.props.history.push('/flyers')}>Done</button>
     </div>
     </section>
    );
    }
}

export default SignUp