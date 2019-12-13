import React, {Component} from 'react'
import FlyersContext from '../../FlyersContext'
import './AddChild.css'
import FlyerApiService from '../../services/flyer-api-service'
import ValidationError from '../ValidationError/ValidationError'

class AddChild extends Component {
    state = {
        name: '',
        childrenAdded: [],
    }

    static contextType = FlyersContext
    
    onInputChange = (event) =>{
        const value = event.target.value;
        this.setState({
            [event.target.name]: value,
        })
    }


    handleAddChild = (e) =>{
        e.preventDefault()
        this.context.onAddChild(this.state.name)
        const newChild = {childname: this.state.name}
        

        FlyerApiService.postChild(newChild)
        .then(()=>{
        this.setState({
            childrenAdded: [...this.state.childrenAdded, this.state.name]
        })
        this.setState({
            name: '',
           
        })
    })
        
        
    }
    
    validateChild(){
        const matchingChildren = this.context.children.filter((child) => child.childname === this.state.name)
        
        if(matchingChildren.length>0){
             return 'Child alredy exists. Please enter a different name'
        }
        return 
    }

    validateChildName(){
        const name = this.state.name
        if(name.length === 0){
            return 'Child name must be at least 1 character'
        }
        return
    }



    render(){
        const childList = this.state.childrenAdded.map((child)=><li key={child}>{child}</li>)
        return(
            <section className="addchildsection">
                <div>
            <form  className="addChild" onSubmit={(e)=>this.handleAddChild(e)}>
                <legend>Add Child</legend>
                <label htmlFor="add-child">Name</label>
                <input name="name" type="text" id="add-child" onChange={(e)=>this.onInputChange(e)} value={this.state.name}/>
                <ValidationError message={this.validateChild()}/>
                <ValidationError message={this.validateChildName()}/>
                <button type="submit" disabled={this.validateChild() || this.validateChildName()}>Add Child</button>
                <button type="reset" onClick={()=>this.props.history.push('/flyers')}>Done</button>
            </form>
            </div>
            <div className="addchildlist">
                <h2>Children Added</h2>
            <ul>
            {childList}
            </ul>
            </div>
            </section>
        )
    }
}

export default AddChild
