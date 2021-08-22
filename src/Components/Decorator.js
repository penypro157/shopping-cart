import React from 'react';
import { Component } from 'react';
import Size from './Size';
import Result from './Result';
import Color from './Color';

class Decorator extends Component {
    constructor(props) {
        super(props);
        this.onReset = this.onReset.bind(this);
        this.state = {
            size: 12,
            color: "red"
        }
    }
    onReset() {
        this.setState(() => {
            return {
                size: 12,
                color: "red"
            }
        });
    }
    render() {
        return (
            <div>

                <div className="row">
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    <Color changeColor={(data) => {
                            this.setState({
                                color: data
                            });
                            console.log(data);
                        }} />
                    </div>
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                        <Size size={this.state ? this.state.size : 12}  onChangeSize={(data) => {
                            this.setState({
                                size: data
                            });
                            console.log(this.style);
                        }} />
                    </div>
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">

                        <button type="button" className="btn btn-primary" onClick={this.onReset} >Reset</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                        <h1>Color : default - Fontsize : {this.state === null ? 12 : this.state.size}</h1>
                        <br />
                        <Result color={this.state ? this.state.color : "red"} size={this.state ? this.state.size : "12"} />
                    </div>
                </div>

            </div>


        );
    }
}

export default Decorator;
