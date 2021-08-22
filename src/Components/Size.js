import React from 'react';
import { Component } from 'react';

class Size extends Component {
    constructor(props) {
        super(props);
        this.state = {
            size: this.props.size
        };
        console.log('build size with '+ this.props.size);
        this.increase = this.increase.bind(this);
        this.decrease = this.decrease.bind(this);
    }
    increase() {
        this.props.onChangeSize(this.props.size + 1);
    }
    decrease() {
        this.props.onChangeSize(this.props.size - 1);
    }
    render() {
        console.log('render Size. ' + this.props.size);
        return (


            <div className="panel panel-info">
                <div className="panel-heading">
                    <h3 className="panel-title">Size: {this.props.size } px</h3>
                </div>
                <div className="panel-body">

                    <button type="button" className="btn btn-primary" onClick={this.decrease}>Giảm</button>
                    <button type="button" className="btn btn-primary" onClick={this.increase}>Tăng</button>
                </div>
            </div>

        );
    }
}

export default Size;
