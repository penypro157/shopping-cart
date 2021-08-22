import React from 'react';
import { Component } from 'react';
import Mobile from './Mobile';

class Props extends Component {
    constructor(props) {
        super(props);
        this.onAddProduct = this.onAddProduct.bind(this);
        this.state = {
            products: [
                {
                    id: 1,
                    name: 'Iphone 6s Plus',
                    price: 3000000,
                    image: "https://cdn.tgdd.vn/Products/Images/42/87846/iphone-6s-plus-32gb-hh-600x600-600x600-600x600-600x600.jpg",
                    status: false

                }, {
                    id: 2,
                    name: 'Iphone 8 Plus',
                    price: 5000000,
                    image: "https://hcm.clickbuy.com.vn/uploads/2019/03/iPhone-8-plus-den.png",
                    status: true

                }
                , {
                    id: 3,
                    name: 'Iphone XS Max',
                    price: 11000000,
                    image: "https://halomobile.vn/wp-content/uploads/2018/02/iphone-xs-max-halomobile.jpg",
                    status: false

                }, {
                    id: 4,
                    name: 'Iphone 11',
                    price: 1250000,
                    image: "https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2019/9/11/637037652463173144_11-xanh.png",
                    status: true

                }, {
                    id: 5,
                    name: 'Iphone 12 Promax',
                    price: 24000000,
                    image: "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/thumbnail/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone-12-pro-max_1__7_1.jpg",
                    status: true

                }
            ]
        }
    }
    onAddProduct() {
        console.log(this.refs.test);
    }
    render() {
        var listElement = this.state.products.map((item, index) => {
            return item.status ? <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <Mobile key={item.id} ref="test" mobile={item} id={item.id} name={item.name} price={item.price} image={item.image} />
            </div> : '';
        });
        return (
            <div>

                <div className="row">
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">

                        <div className="panel panel-success">
                            <div className="panel-body">
                                <div className="form-group">
                                    <label htmlFor="formGroupExampleInput">Name</label>
                                    <input type="text" className="form-control" ref="name" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="formGroupExampleInput2">Price</label>
                                    <input type="text" className="form-control" ref="price" />
                                </div>
                                <button type="button" className="btn btn-primary" onClick={this.onAddProduct}>Add Product</button>



                            </div>
                        </div>

                    </div>
                </div>

                <div className="row">

                    {listElement}
                </div>

            </div>


        );
    }
}

export default Props;
