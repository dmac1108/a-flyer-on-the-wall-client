import React, {Component} from 'react'
import FlyersContext from '../FlyersContext'
import {withRouter} from 'react-router-dom'

class FlyerForm extends Component {
    state={
        title: '',
        image: '',
        eventdate: '',
        action: '',
        actiondate: '',
        category: '',
        child: [],
    }
    static contextType = FlyersContext

    onTitleChange = (title) =>{
        this.setState({
            title: title
        })
    }
    onImageChange = (files) =>{
        
        this.setState({
            image:  URL.createObjectURL(files[0])
            
        })
    }

    onEventDateChange = (eventDate) =>{
        this.setState({
            eventdate: eventDate
        })
    }
    onActionChange = (action) =>{
        this.setState({
            action: action
        })
    }
    onActionDateChange = (actionDate) =>{
        this.setState({
            actiondate: actionDate
        })
    }
    onCategoryChange = (category) =>{
        
        this.setState({
            category: category
        })
    }
    onChildChange = (child) =>{

        var options = child
          var value = [];
                  for (var i = 0, l = options.length; i < l; i++) {
                    if (options[i].selected) {
                      value.push(Number(options[i].value));
                    }
                  }
            this.setState({child: value});
           
            
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        
        const flyer = 
            {
                title: this.state.title,
                image: this.state.image,
                eventdate: this.state.eventdate,
                action: this.state.action,
                actiondate: this.state.actiondate,
                category: this.state.category,
                childid: this.state.child,
            }
        
        this.props.submissionType === 'add' ? this.context.onAddFlyer(flyer) : this.context.onEditFlyer(flyer)
        this.props.history.push('/flyers')
    }

    componentDidMount(){
        if(this.props.submissionType === 'edit'){
            const selectedFlyer = this.context.flyers.find((flyer) => flyer.id == this.props.flyerid)
            this.setState({
                title: selectedFlyer.title,
                image: selectedFlyer.image,
                eventdate: selectedFlyer.eventdate,
                actiondate: selectedFlyer.actiondate,
                category: selectedFlyer.category,
                child: selectedFlyer.childid
            })
        }
    }


    render(){
    const childOptions = this.context.children.map((child) => 
        <option key={child.id} value={child.id}>{child.name}</option>
    )

    return(
    <form className="addflyer" id="newflyer" onSubmit={(e) => this.handleSubmit(e)}>
       <label htmlFor="title">Title</label> 
       <input id="title" type="text" required onChange={(e)=>this.onTitleChange(e.target.value)}/>
       <label htmlFor="imgfile">Flyer Image</label>
       <input id="last" type="file" accept="image/*,.pdf" required onChange={(e) =>this.onImageChange(e.target.files)}/>
       <label htmlFor="eventdate">Event Date</label>
       <input id="eventdate" type="date" required onChange={(e)=>this.onEventDateChange(e.target.value)}/>
       <label htmlFor="actiondate">Action Date</label>
       <input id="actiondate" type="date" onChange={(e)=>this.onActionDateChange(e.target.value)}/>
       <label htmlFor="actiontype">Action</label>
       <input id="actiontype" type="text" onChange={(e)=>this.onActionChange(e.target.value)}/>
       <label htmlFor="category-select">Select Catgory</label>
       <select id="category-select" onChange={(e)=>this.onCategoryChange(e.target.value)}>
         <option value="school">School</option>
         <option value="scouts">Scouts</option>
        </select>
        <label htmlFor="student-select">Select One or More Students</label>
        <select id="student-select" multiple size="4" onChange={(e)=>this.onChildChange(e.target.options)}>
            {childOptions}
        </select>
       <button type="submit" >Submit</button>
       <button type="reset" onClick={() => this.props.history.push('/flyers')}>Cancel</button>
    </form>

    )
    }



}
export default withRouter(FlyerForm)