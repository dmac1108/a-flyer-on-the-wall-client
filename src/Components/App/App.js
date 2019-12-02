import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Nav from '../Nav/Nav';
import './App.css';
import FlyerList from '../FlyerList/FlyerList';
import Flyer from '../Flyer/Flyer'
import LandingPage from '../LandingPage/LandingPage';
import SignUp from '../SignUp/SignUp';
import SignIn from '../SignIn/SignIn';
import AddFlyer from '../AddFlyer/AddFlyer';
import EditFlyer from '../EditFlyer/EditFlyer';
import AddChild from '../AddChild/AddChild';
import PrivateRoute from '../Utils/PrivateRoute';
import PublicOnlyRoute from '../Utils/PublicOnlyRoute';
import {withRouter} from 'react-router-dom'

class App extends Component {
 
  
  render(){
    return(
    <div>
      
      <Nav />
      
      <Switch>
        <Route exact path='/' component={LandingPage}/>

        
        <PublicOnlyRoute path='/sign-up' component={SignUp}/>
        <PublicOnlyRoute path='/sign-in' component={SignIn}/>
        <PrivateRoute path='/flyers' component={FlyerList} />
        <PrivateRoute path='/flyers/:flyerid' component={Flyer}/>
        <PrivateRoute path='/add-flyer' component={AddFlyer}/>
        <PrivateRoute path='/edit-flyer/:flyerid' component={EditFlyer}/>
        <PrivateRoute path='/add-child' component={AddChild}/>
       
      </Switch>
      

    </div>
  )
  }
}

export default withRouter(App)