import React from 'react';
import { Component } from 'react';

class Result extends Component {
    render() {
        console.log('render result.' + this.props.size);
        return (
            <span style={ { border: "solid", color: this.props.color, fontSize: this.props.size.toString() + 'pt' }}>Hello co ba</span>
        );
    }
}

export default Result;
