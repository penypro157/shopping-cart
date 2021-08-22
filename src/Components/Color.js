import React from 'react';
import { Component } from 'react';

class Color extends Component {
    constructor(props) {
        super(props);
        this.onChangeColor = this.onChangeColor.bind(this);
    }
    onChangeColor (e) {
        if(this.props.changeColor){
            this.props.changeColor(e.target.name);
        }
    }
    render() {

        return (

            <div className="panel panel-info">
                <div className="panel-heading">
                    {/* <h3 className="panel-title">Size: {this.state ? this.state.size : this.props.size } px</h3> */}
                    <h3 className="panel-title">Color Picker</h3>
                </div>
                <div className="panel-body">
                    <div className="btn-group" role="group" aria-label="Basic example">

                    </div>
                    <button type="button" name="red" onClick={this.onChangeColor} className="btn" style={{ width: '30px', height: '30px', background: 'red' }}></button>
                    <button type="button" name="green" onClick={this.onChangeColor} className="btn" style={{ width: '30px', height: '30px', background: 'green' }}></button>
                    <button type="button" name="blue" onClick={this.onChangeColor} className="btn" style={{ width: '30px', height: '30px', background: 'blue' }}></button>
                    <button type="button" name="grey" onClick={this.onChangeColor} className="btn" style={{ width: '30px', height: '30px', background: 'grey' }}></button>
                </div>
            </div>


        );
    }
}

export default Color;
