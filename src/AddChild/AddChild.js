import React, {Component} from 'react'
import FlyersContext from '../FlyersContext'
import './AddChild.css'

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
        this.setState({
            childrenAdded: [...this.state.childrenAdded, this.state.name]
        })
        console.log(this.state.childrenAdded)
        this.setState({
            name: '',
           
        })
    }
    
    render(){
        const childList = this.state.childrenAdded.map((child)=><li key={child}>{child}</li>)
        return(
            <section className="addchildsection">
                <div>
            <form  className="addChild" onSubmit={(e)=>this.handleAddChild(e)}>
                <legend>Add Child</legend>
                <label htmlFor="add-child">Name</label>
                <input name="name" type="text" id="add-child" onChange={(e)=>this.onInputChange(e)} value={this.state.childName}/>
                <button type="submit">Add Child</button>
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
