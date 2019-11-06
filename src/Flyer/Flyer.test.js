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
    eventstartdate: "9/3/19 9:30",
    eventenddate: "9/4/19 10:30",
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