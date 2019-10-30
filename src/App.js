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

  onSortChange = (sortValue) =>{
    console.log(sortValue)
    this.setState({
     sortValue: sortValue
    })
  }

  componentDidMount(){
    this.setState({
      flyers: STORE.flyers, 
      children: STORE.children,
    })
  }

  render(){
    const contextValue = {
      flyers: this.state.flyers,
      children: this.state.children,
    }

  return(
    <div>
      <FlyersContext.Provider value={this.contextValue}>
      <Nav />
      
      <Switch>
        <Route exact path='/' component={LandingPage}/>
        <Route path='/sign-up' component={SignUp}/>
        <Route path='/sign-in' component={SignIn}/>
        <Route path='/flyers' component={FlyerList} />
        <Route path='/add-flyer' component={AddFlyer}/>
        <Route path='/edit-flyer' component={EditFlyer}/>
      </Switch>
      </FlyersContext.Provider>

    </div>
  )
  }
}

export default App