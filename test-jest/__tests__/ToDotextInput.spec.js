import React from 'react';
import {shallow} from 'enzyme';
import ToDoTextInput from '../src/ToDoTextinput'

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

configure({ adapter: new Adapter() });

const noop = () => {}

test('sets the text prop as value', () => {
    const text = 'some text';
    const wrapper = shallow(< ToDoTextInput text={text} onSave={noop}/>) 
    
    expect(wrapper.prop('value')).toBe(text);
});

test('sets the text prop as value', () => {
    const placeholder = 'ph';
    const wrapper = shallow(< ToDoTextInput placeholder={placeholder} onSave={noop}/>) 
    
    expect(wrapper.prop('placeholder')).toBe(placeholder);
});