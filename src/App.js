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
      filterType: 'category',
      filterValue: 'all',
      childFilterValue: 'all',
      sortValue: 'actiondate',
    }
  
   
  onAddFlyer = (flyer) => {
    console.log("Add flyer called", flyer)
    this.setState({
      flyers: [...this.state.flyers,flyer]
    })
    console.log(this.state.flyers)
  }

  onDeleteFlyer = (flyerid) =>{
    this.setState({
      flyers: this.state.flyers.filter((flyer) => flyer.id !== flyerid)
    })
  }

  onFilterChange = (filterType, selectedValue) =>{
    this.setState({
      filterType: filterType,
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
      filterType: 'category',
      filterValue: 'all',
      childFilterValue: 'all',
      sortValue: 'eventdate',
    })
  }

  render(){
    const contextValue = {
      flyers: this.state.flyers,
      children: this.state.children,
      filterType: this.state.filterType,
      filterValue: this.state.filterValue,
      childFilterValue: this.state.childFilterValue,
      sortValue: this.state.sortValue,
      onAddFlyer: this.onAddFlyer,
      onDeleteFlyer: this.onDeleteFlyer,
      onFilterChange: this.onFilterChange,
      onSortChange: this.onSortChange,
      onChildFilterChange: this.onChildFilterChange,
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