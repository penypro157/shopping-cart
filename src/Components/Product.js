/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Component } from 'react';
class Product extends Component {

    render() {
        return (

            <div className="thumbnail">
                <img src="https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2019/9/11/637037687763926758_11-pro-max-xanh.png" alt="" />
                <div className="caption">
                    <h3>Iphone 11 Pro Max</h3>
                    <p>
                        Iphone 11 Pro Max 128Gb ROM 4GB
                    </p>
                    <p>
                        <a href="" className="btn btn-primary">Add To Cart</a>
                        <a href="" className="btn btn-default">Add To Wishlist</a>
                    </p>
                </div>
            </div>
        );
    }
}
export default Product;