import React from 'react'
import AddChild from '././AddChild'
import {BrowserRouter } from 'react-router-dom'
import {shallow} from 'enzyme'
import toJson from 'enzyme-to-json'
import ReactDOM from 'react-dom';




describe('AddChild Component', ()=>{
    it('renders the AddChild Component without crashing', ()=>{
        const div = document.createElement('div');
        ReactDOM.render(<BrowserRouter><AddChild/></BrowserRouter>, div)
        ReactDOM.unmountComponentAtNode(div)
    })

    it('renders the AddChild component', ()=>{
        const wrapper = shallow(<AddChild/>)
        expect(toJson(wrapper)).toMatchSnapshot()
    })
})