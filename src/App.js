import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Nav from './Nav/Nav';
import './App.css';
import STORE from './STORE';
import FlyersContext from './FlyersContext';

import FlyerList from './FlyerList/FlyerList';
import LandingPage from './LandingPage/LandingPage';
import SignUp from './SignUp/SignUp';
import SignIn from './SignIn/SignIn';
import AddFlyer from './AddFlyer/AddFlyer';
import EditFlyer from './EditFlyer/EditFlyer';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      flyers: [],
      children: [],
      filterType: 'category',
      filterValue: 'School',
      sortValue: 'actiondate',
    }
  }
   
  onAddFlyer = (flyer) => {
    this.setState({
      flyers: [...this.state.flyers,flyer]
    })
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

  componentDidMount(){
    this.setState({
      flyers: STORE.flyers, 
      children: STORE.children,
    })
  }

  render(){
    

  return(
    <div>
      <Nav />
      
      <Switch>
        <Route exact path='/' component={LandingPage}/>
        <Route path='/sign-up' component={SignUp}/>
        <Route path='/sign-in' component={SignIn}/>
        <Route path='/flyers' render={() =>  <FlyerList flyersList={this.state.flyers} childList={this.state.children} filterType={this.state.filterType} filter={this.state.filterValue} sort={this.state.sortValue} filterChange={this.onFilterChange}/>} />
        <Route path='/add-flyer' component={AddFlyer}/>
        <Route path='/edit-flyer' component={EditFlyer}/>
      </Switch>

    </div>
  )
  }
}

export default App