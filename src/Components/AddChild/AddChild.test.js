import React from 'react'
import AddChild from '././AddChild'
import {BrowserRouter } from 'react-router-dom'
import {shallow} from 'enzyme'
import toJson from 'enzyme-to-json'
import ReactDOM from 'react-dom';




describe.only('AddChild Component', ()=>{
    it('renders the AddChild Component without crashing', ()=>{
        const div = document.createElement('div');
        ReactDOM.render(<BrowserRouter><AddChild/></BrowserRouter>, div)
        ReactDOM.unmountComponentAtNode(div)
    })

    it('renders the AddChild component', ()=>{
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
        const wrapper = shallow(<BrowserRouter><AddChild/></BrowserRouter>, context)
        expect(toJson(wrapper)).toMatchSnapshot()
    })
})