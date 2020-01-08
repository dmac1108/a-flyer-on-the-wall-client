import React from 'react';
import ReactDOM from 'react-dom';
import Flyer from './Flyer'
import {BrowserRouter } from 'react-router-dom'
import {shallow} from 'enzyme'
import toJson from 'enzyme-to-json'

const testContext = {
"testFlyer": [{
    id: 1,
    title: 'Test',
    image:"require('./campingbase64.bin')",
    eventstartdate: "9/3/19 9:30",
    eventenddate: "9/4/19 10:30",
    actiondate:'8/15/19',
    action: 'Test render', 
    flyercategory: 'Scouts', 
    childid: [1,2],
    category: 1
}],
"flyer_categories": [{
    id: 1,
    category: "testing",
    
}]

}

const context = {
    "children" : [
        {
            id: 1,
            name: "Dick",
        },
        {
            id: 2,
            name: "Sally",
        },
        {
            id: 3,
            name: "Jane",
        },
    ],
    "categories": [{
        id: 1,
        category: "testing",
        
    },] ,
    "flyers_children": [{
        childid: 1,
        flyerid: 1,
        
    },
    {
        childid: 2,
        flyerid: 1,
        
    }] ,
    
}





// it('renders without crashing', () => {
//     const div = document.createElement('div');
//     ReactDOM.render(<BrowserRouter><Flyer id={testFlyer.id} title={testFlyer.title} image={testFlyer.image} eventdate={testFlyer.eventdate} actiondate={testFlyer.actiondate} action={testFlyer.action} category={testFlyer.category} childid={testFlyer.childid} /></BrowserRouter>, div)
//     ReactDOM.unmountComponentAtNode(div)
// }); 

// it('renders without crashing', () => {
//     const wrapper = 
//     shallow(<BrowserRouter><Flyer id={testContext.testFlyer.id} title={testContext.testFlyer.title} image={testContext.testFlyer.image} eventdate={testContext.testFlyer.eventdate} actiondate={testContext.testFlyer.actiondate} action={testContext.testFlyer.action} category={testContext.testFlyer.category} childid={testContext.testFlyer.childid} /></BrowserRouter>, testContext)
//     ReactDOM.unmountComponentAtNode(wrapper)
// }); 



// it('renders a FlyersList by default', () =>{
//     const wrapper = shallow(<BrowserRouter><FlyerList/></BrowserRouter>, context)
//     expect(toJson(wrapper)).toMatchSnapshot()
// })





// it('renders the UI as expected', () =>{
//     const wrapper = shallow(<BrowserRouter><Flyer id={1} title={'Test Flyer'} image={require('../../assets/Corn-Maze-Flyer.jpg')} eventdate={'9/3/19 9:30'} actiondate={'9/3/19 9:30'} action={'testing'} category={1} childid={1}/></BrowserRouter>, {context: {'categories': 1}})
//     //expect(toJson(wrapper)).toMatchSnapshot()
//     expect(wrapper.context('categories')).to.equal(1);
// })

it('renders the UI as expected', ()=>{
    const wrapper = shallow(<Flyer />, context);
    expect(wrapper.find('.flyer'));
})

