import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import ShallowRenderer from 'react-test-renderer/shallow';
import Button from '../src/button';

test('works', () => {
    expect(true).toBe(true)
});

test('renders with text', () => {
    const text = 'some text';
    const renderer = new ShallowRenderer();
    renderer.render(<Button text={text} onClick={()=> {}}/>) //yes this is bad 
    const output = renderer.getRenderOutput();

    expect(output.type).toBe('button');
    expect(output.props.text).toBe(text);
});

test('fires onClick callback', () => {
    const onClick = jest.fn();
    //render into detached DOM
    const tree = ReactTestUtils.renderIntoDocument(<Button onClick={onClick}/>);
    const button = ReactTestUtils.findRenderedDOMComponentWithTag(tree, 'button');
    ReactTestUtils.Simulate.click(button);

    expect(onClick).toBeCalled();
});