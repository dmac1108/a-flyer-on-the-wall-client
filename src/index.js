import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './Components/App/App';
import {FlyersProvider} from './FlyersContext'



ReactDOM.render(<BrowserRouter><FlyersProvider ><App/></FlyersProvider></BrowserRouter>, document.getElementById('root'));

