import config from './config';
import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Nav from './Nav/Nav';
import './App.css';
import STORE from './STORE';
import FlyersContext from './FlyersContext';

import FlyerList from './FlyerList/FlyerList';
import Flyer from './Flyer/Flyer'
import LandingPage from './LandingPage/LandingPage';
import SignUp from './SignUp/SignUp';
import SignIn from './SignIn/SignIn';
import AddFlyer from './AddFlyer/AddFlyer';
import EditFlyer from './EditFlyer/EditFlyer';
import AddChild from './AddChild/AddChild';



class App extends Component {
 
  state = {
      flyers: [],
      children: [],
      flyers_children: [],
      categories: [],
      users: [],
      filterValue: 'all',
      childFilterValue: 'all',
      sortValue: 'actiondate',
    }
  
   
  onAddFlyer = (flyer) => {
    flyer.id = Math.floor(Math.random() * Math.floor(10000))
    this.setState({
      flyers: [...this.state.flyers,flyer]
    })
  }

  onAddCategory = (newCategory) => {
    
    this.setState({
      categories: [...this.state.categories,newCategory]
    })
  }

  onAddUser = (newUser) =>{
    newUser.id = Math.floor(Math.random() * Math.floor(10000))
    this.setState({
      users: [...this.state.users,newUser]
    })
  }

  onAddChild = (newChild) =>{
    const child = {
      id: Math.floor(Math.random() * Math.floor(10000)),
      name: newChild,
    }
    this.setState({
      children: [...this.state.children,child]
    })
  }

  onEditFlyer = (id,flyer) =>{
    
    const index = this.state.flyers.find((flyerIndex) => flyerIndex.id == id).id
   
    this.setState({
      flyers: [...this.state.flyers.filter((flyer)=>flyer.id !== index),flyer]
    })

  }

  onDeleteFlyer = (flyerid) =>{
    this.setState({
      flyers: this.state.flyers.filter((flyer) => flyer.id !== flyerid)
    })
  }

  onFilterChange = (selectedValue) =>{
    this.setState({
      filterValue: selectedValue,
    })
  }

  onChildFilterChange = (selectedValue) =>{
    this.setState({
      childFilterValue: selectedValue,
    })
  }

  onSortChange = (sortValue) =>{
    
    this.setState({
     sortValue: sortValue
    })
  }

  componentDidMount(){
    Promise.all(
      [
        fetch(`${config.API_ENDPOINT}/children`),
        fetch(`${config.API_ENDPOINT}/flyers`),
        fetch(`${config.API_ENDPOINT}/flyers_children`),
        fetch(`${config.API_ENDPOINT}/categories`)
      ]
    ).then(([childreRes, flyersRes, flyers_childrenRes, categoriesRes]) => {
      if(!childreRes.ok) {
        return childreRes.json().then(e => Promise.reject(e));
      }
      if(!flyersRes.ok) {
        return flyersRes.json().then(e => Promise.reject(e));
      }
      if(!flyers_childrenRes.ok) {
        return flyers_childrenRes.json().then(e => Promise.reject(e));
      }
      if(!categoriesRes.ok) {
        return categoriesRes.json().then(e => Promise.reject(e));
      }
      return Promise.all([childreRes.json(), flyersRes.json(), flyers_childrenRes.json(), categoriesRes.json()]);
    })
    .then(([children, flyers, flyers_children, categories]) =>{
      this.setState({children,flyers, flyers_children, categories,filterValue: 'all',
      childFilterValue: 'all',
      sortValue: 'eventdate',});
    })
    .catch(error => console.error(error));
  }
  
  render(){
    const contextValue = {
      flyers: this.state.flyers,
      children: this.state.children,
      flyers_children: this.state.flyers_children,
      categories: this.state.categories,
      filterValue: this.state.filterValue,
      childFilterValue: this.state.childFilterValue,
      sortValue: this.state.sortValue,
      onAddFlyer: this.onAddFlyer,
      onDeleteFlyer: this.onDeleteFlyer,
      onFilterChange: this.onFilterChange,
      onSortChange: this.onSortChange,
      onChildFilterChange: this.onChildFilterChange,
      onEditFlyer: this.onEditFlyer,
      onAddCategory: this.onAddCategory,
      onAddUser: this.onAddUser,
      onAddChild: this.onAddChild,
    }
    
    return(
    <div>
      <FlyersContext.Provider value={contextValue}>
      <Nav />
      
      <Switch>
        <Route exact path='/' component={LandingPage}/>
        <Route path='/sign-up' component={SignUp}/>
        <Route path='/sign-in' component={SignIn}/>
        <Route path='/flyers' component={FlyerList} />
        <Route path='/flyers/:flyerid' component={Flyer}/>
        <Route path='/add-flyer' component={AddFlyer}/>
        <Route path='/edit-flyer/:flyerid' component={EditFlyer}/>
        <Route path='/add-child' component={AddChild}/>
       
      </Switch>
      </FlyersContext.Provider>

    </div>
  )
  }
}

export default App