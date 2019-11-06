import React from 'react';
import ReactDOM from 'react-dom';
import Flyer from './Flyer'
import {BrowserRouter } from 'react-router-dom'
import {shallow} from 'enzyme'
import toJson from 'enzyme-to-json'



const testFlyer = {
    id: 1,
    title: 'Test',
    image:"require('../src/scoutcamping.jpg')",
    eventdate: '9/1/19',
     actiondate:'8/15/19',
      action: 'Test render', 
      category: 'Scouts', 
      childid: [1,2]
}

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter><Flyer /></BrowserRouter>, div)
    ReactDOM.unmountComponentAtNode(div)
});


it('renders the UI as expected', () =>{
    const wrapper = shallow(<BrowserRouter><Flyer id={testFlyer.id} title={testFlyer.title} image={testFlyer.image} eventdate={testFlyer.eventdate} actiondate={testFlyer.actiondate} action={testFlyer.action} category={testFlyer.category} childid={testFlyer.childid}/></BrowserRouter>)
    expect(toJson(wrapper)).toMatchSnapshot()
})