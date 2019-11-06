import React, {Component} from 'react'
import './FlyerForm.css'
import FlyersContext from '../FlyersContext'
import {withRouter} from 'react-router-dom'
import DatePicker  from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'


class FlyerForm extends Component {
    state={
        id: '',
        title: '',
        image: '',
        eventdate: new Date(),
        action: '',
        actiondate: new Date(),
        category: '',
        child: [],
        hideAddCategory: true,
        
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
        const formattedDate = eventDate.getMonth() + 1 + '/' + eventDate.getDate() + '/' + eventDate.getFullYear()
        
        this.setState({
            eventdate: formattedDate
        })
    }
    onActionChange = (action) =>{
        this.setState({
            action: action
        })
    }
    onActionDateChange = (actionDate) =>{
        const formattedDate = actionDate.getMonth() + 1 + '/' + actionDate.getDate() + '/' + actionDate.getFullYear()
        this.setState({
            actiondate: formattedDate
        })
    }
    onCategoryChange = (category) =>{
        if(category === 'add-category'){
            this.setState({
                hideAddCategory: false
            })
        } else {
        this.setState({
            category: category
        })
    }
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

    handleNewCategory = (newCategory) =>{
        this.setState({
            category: newCategory
            
        })
        this.context.onAddCategory(newCategory)
        
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
        
        this.props.submissionType === 'add' ? this.context.onAddFlyer(flyer) : this.context.onEditFlyer(this.props.flyerid, flyer)
        this.props.history.push('/flyers')
    }



    componentDidMount(){
        if(this.props.submissionType === 'edit'){
            const selectedFlyer = this.context.flyers.find((flyer) => flyer.id == this.props.flyerid)
            this.setState({
                title: selectedFlyer.title,
                image: selectedFlyer.image,
                eventdate: selectedFlyer.eventdate,
                action: selectedFlyer.action,
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
    
    const categoryOptions = this.context.categories.map((category) => <option key={category} value={category}>{category}</option>)
    

    return(
    <form className="addflyer" id="newflyer" onSubmit={(e) => this.handleSubmit(e)}>
       <label htmlFor="title">Title</label> 
       <input id="title" type="text" required onChange={(e)=>this.onTitleChange(e.target.value)} value={this.state.title}/>
       <label htmlFor="imgfile">Flyer Image</label>
       <input id="last" type="file" accept="image/*,.pdf" required onChange={(e) =>this.onImageChange(e.target.files)} files={this.state.image}/>
       
       <label htmlFor="eventdate">Event Date</label>
       <DatePicker id="eventdate" selected={new Date(this.state.eventdate)} onChange={date =>{this.onEventDateChange(date)}}/>
       
       <label htmlFor="actiondate">Action Date</label>
       <DatePicker id="actiondate" selected={new Date(this.state.actiondate)} onChange={date =>{this.onActionDateChange(date)}}/>

       <label htmlFor="actiontype">Action</label>
       <input id="actiontype" type="text" onChange={(e)=>this.onActionChange(e.target.value)} value={this.state.action}/>
       <label htmlFor="category-select" hidden={!this.state.hideAddCategory}>Select Catgory</label>
       <select id="category-select" onChange={(e)=>this.onCategoryChange(e.target.value)} hidden={!this.state.hideAddCategory} value={this.state.category.toLowerCase()}>
       <option value="select">Choose an option</option>
        {categoryOptions}
        </select>
        <label htmlFor="add-category" hidden={this.state.hideAddCategory}>Add Category</label>
        <input type="text" id="add-category" hidden={this.state.hideAddCategory} onChange={(e)=>this.handleNewCategory(e.target.value)}/>
        <label htmlFor="student-select">Select One or More Students</label>
        <select id="student-select" multiple size="4" onChange={(e)=>this.onChildChange(e.target.options)} >
            <option value="select">Choose an option</option>
            {childOptions}
        </select>
       
       <button type="submit" >Submit</button>
       <button type="reset" onClick={() => this.props.history.push('/flyers')}>Cancel</button>
    </form>

    )
    }



}
export default withRouter(FlyerForm)