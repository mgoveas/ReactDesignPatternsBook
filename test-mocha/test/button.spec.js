import React from 'react';
import chai from 'chai'
import spies from 'chai-spies'
import {jsdom} from 'jsdom'
import ReactTestUtils from 'react-dom/test-utils'
import ShallowRenderer from 'react-test-renderer/shallow';
import Button from '../src/button';

chai.use(spies);

const { expect, spy } = chai;

global.document = jsdom('')
global.window = document.defaultView

describe('Button', () => {
    it('renders with text', () => {
        const text = 'some text';
        const renderer = new ShallowRenderer();
        renderer.render(<Button text={text} />) 
        const output = renderer.getRenderOutput();

        expect(output.type).toBe('button');
        expect(output.props.text).toBe(text);
    });
});
