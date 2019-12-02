import React, {Component} from 'react';
import {Link }  from 'react-router-dom'
import './FlyerList.css';
import FlyersContext from '../../FlyersContext';
import FlyerApiService from '../../services/flyer-api-service'
import Flyer from '../Flyer/Flyer';
import FilterSort from '../Filter-Sort/Filter-Sort';

class FlyerList extends Component{

    static contextType = FlyersContext
    

    componentDidMount(){

        FlyerApiService.getFlyers()
        .then(this.context.setFlyers)
        .catch(error => console.error(error))
        FlyerApiService.getChildren()
        .then(this.context.setChildren)
        .catch(error => console.error(error))
        FlyerApiService.getFlyersChildren()
        .then(this.context.setFlyersChildren)
        .catch(error => console.error(error))
        FlyerApiService.getCategories()
        .then(this.context.setCategories)
        .catch(error => console.error(error))
        
      }




    render(){
    const {flyers, flyers_children, filterValue, childFilterValue, sortValue} = this.context;

    console.log(flyers_children)
    
    // if(this.context.children.length  === 0){
    //     this.props.history.push('/add-child')
    // }

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


   
    const list = filteredList.map((flyer) =><li key={flyer.id}><Flyer id={flyer.id} title={flyer.title} location={flyer.location} image={flyer.image} eventstartdate={flyer.eventstartdate} eventenddate={flyer.eventenddate} actiondate={flyer.actiondate} action={flyer.action} category={flyer.category}/></li>);

    
    return(
        <div> 
        <FilterSort/>
        <section className="flyer-list">
            <Link to='/add-flyer' ><button>+ New Flyer</button></Link>
            <Link to='/add-child'><button>+ New Child</button></Link>
            <ul>
                {list}
            </ul>
    </section>
        </div>
    )
    }
}

export default FlyerList