import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'react-proptypes';

class Button extends React.Component{
    constructor(props){
        super(props);
    }
    render() {
        return (<button text={this.props.text} onClick={this.props.onClick}>
        </button>);
    }
}

Button.propTypes ={
    text:PropTypes.string,
    onClick: PropTypes.function
}

export default Button;