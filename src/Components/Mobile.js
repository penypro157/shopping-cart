/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Component } from 'react';
class Mobile extends Component {
    constructor(props){
        super(props);
        this.addToCart = this.addToCart.bind(this);
    }
    addToCart () {
        alert(this.ref);
    };
    render() {
        return (
            <div className="thumbnail">
                <img src={this.props.mobile.image} alt="" />
                <div className="caption">
                    <h3>{this.props.name}</h3>
                    <p>
                        {this.props.price}
                    </p>
                    <p>
                        <a href="" className="btn btn-primary"  onClick={this.addToCart}>Add To Cart</a>
                    </p>
                </div>
            </div>
        );
    }
}
export default Mobile;