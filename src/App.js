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

class App extends Component {
 
  state = {
      flyers: [],
      children: [],
      categories: [],
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
    console.log(newCategory)
    this.setState({
      categories: [...this.state.categories,newCategory]
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
    this.setState({
      flyers: STORE.flyers, 
      children: STORE.children,
      categories: STORE.categories,
      filterValue: 'all',
      childFilterValue: 'all',
      sortValue: 'eventdate',
    })
  }

  render(){
    const contextValue = {
      flyers: this.state.flyers,
      children: this.state.children,
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
      </Switch>
      </FlyersContext.Provider>

    </div>
  )
  }
}

export default App