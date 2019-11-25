import React from 'react'
import FlyerForm from './FlyerForm'
import {BrowserRouter } from 'react-router-dom'
import {shallow} from 'enzyme'
import toJson from 'enzyme-to-json'
import ReactDOM from 'react-dom';


describe('FlyerForm Component', ()=>{
    it('renders the FlyerForm Component without crashing', ()=>{
        const div = document.createElement('div');
        ReactDOM.render(<BrowserRouter><FlyerForm/></BrowserRouter>, div)
        ReactDOM.unmountComponentAtNode(div)
    })

    it('renders the FlyerForm component', ()=>{
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
        categories: ['scouts', 'school', 'gymnastics'],};
        const wrapper = shallow(<BrowserRouter><FlyerForm/></BrowserRouter>, context)
        expect(toJson(wrapper)).toMatchSnapshot()
    })
})