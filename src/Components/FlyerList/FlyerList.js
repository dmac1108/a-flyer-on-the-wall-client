import React, {Component} from 'react';
import {Link }  from 'react-router-dom'
import './FlyerList.css';
import FlyersContext from '../../FlyersContext';
import FlyerApiService from '../../services/flyer-api-service'
import Flyer from '../Flyer/Flyer';
import FilterSort from '../Filter-Sort/Filter-Sort';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {library} from '@fortawesome/fontawesome-svg-core'
import {faUserPlus, faChild, faFile, faAmericanSignLanguageInterpreting} from '@fortawesome/free-solid-svg-icons'


library.add(faUserPlus, faChild, faFile);

class FlyerList extends Component{

    state={
        hideLoader: false,
        
    }

    static contextType = FlyersContext
    
    

    componentDidMount(){
        
        FlyerApiService.getChildren()
        .then((children) =>{
            this.context.setChildren(children)
        })
        .then(()=>{
            FlyerApiService.getCategories()
            .then((categories)=>{
                this.context.setCategories(categories)
            })
            .then(()=>{
            FlyerApiService.getFlyers()
            .then((flyers)=>{
                this.context.setFlyers(flyers)
            })
            .then(()=>{
                FlyerApiService.getFlyersChildren()
                .then((flyer_children)=>{
                    this.context.setFlyersChildren(flyer_children)
                    this.setState({
                        hideLoader: true
                    })
                })
            })
        })
        })


      }

    render(){
    const {flyers, flyers_children, filterValue, childFilterValue, sortValue} = this.context;

    let sortedList = flyers;
    
    if(sortValue !== null){
        if(sortValue === 'eventdate'){
            sortedList = flyers.sort((a,b) => new Date(a.eventstartdate) - new Date(b.eventstartdate))
            }
        else {
            sortedList = flyers.sort((a,b) => new Date(a.actiondate) - new Date(b.actiondate))
        }
    }
    
    let filteredList = sortedList;
    
    if(filterValue === 'all' && childFilterValue !== 'all')
    {
        
        const filteredFlyers_Children = flyers_children.filter((flyer_child)=>flyer_child.childid == childFilterValue)
        

        filteredList = sortedList.filter((flyer) => filteredFlyers_Children.find((flyer_child)=> flyer_child.flyerid === flyer.id))

        
        
    }
    else if(filterValue !== 'all' && childFilterValue === 'all'){
        
        filteredList = sortedList.filter((flyer) => flyer.category.toLowerCase() === filterValue.toLowerCase()) 
        
    }
    else if(filterValue !== 'all' && childFilterValue !== 'all'){
      
        const filteredFlyers_Children = flyers_children.filter((flyer_child)=>flyer_child.childid == childFilterValue) 
        
        filteredList = sortedList.filter((flyer) => filteredFlyers_Children.find((flyer_child)=> flyer_child.flyerid === flyer.id) && flyer.category.toLowerCase() === filterValue.toLowerCase())
        
    }


   
    const list = filteredList.map((flyer) =><li key={flyer.id} className="flyer-box"><Flyer id={flyer.id} title={flyer.title} location={flyer.location} image={flyer.image} eventstartdate={flyer.eventstartdate} eventenddate={flyer.eventenddate} actiondate={flyer.actiondate} action={flyer.action} category={flyer.category}/></li>);
    
    
    
    return(
        <div> 
        <FilterSort/>
        
        <section className="flyer-list">
             
            <Link to='/add-flyer' ><button title="Add Flyer" className="list-buttons" hidden={!this.state.hideLoader}>+<FontAwesomeIcon icon="file"/></button></Link>
            <Link to='/add-child'><button title="Add Child" className="list-buttons" hidden={!this.state.hideLoader}>+<FontAwesomeIcon icon="child"/></button></Link>
            <div id="loader" className="loader" hidden={this.state.hideLoader}>
                <p>Your flyers are being posted to the wall!</p>
            </div>
            {list.length === 0 && <p>There are no matching flyers.</p>}
            <ul className="flyer-boxes">
                {list}
            </ul>
            <Link to='/add-flyer' ><button title="Add Flyer" className="list-buttons" hidden={!this.state.hideLoader}>+<FontAwesomeIcon icon="file"/></button></Link>
            <Link to='/add-child'><button title="Add Child" className="list-buttons" hidden={!this.state.hideLoader}>+<FontAwesomeIcon icon="child"/></button></Link>
    </section>
        </div>
    )
    }
}

export default FlyerList