import React, {Component} from 'react';
import './wishlist.css';
import ProductCondensed from '../product-condensed/product-condensed.js';
import DataService from '../services/data-service';

class WishList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            wishList: [
                {
                    title: "Item 1",
                    price: 123.45,
                    _id: "sampleID123"
                },
                {
                    title: "Item 2",
                    price: 456.78,
                    _id: "sampleID456"
                },
                {
                    title: "Item 3",
                    price: 910.11,
                    _id: "sampleID789"
                }
            ]
        };

        //Bind functions
        this.createWishList = this.createWishList.bind(this);
    }

    createWishList = () => {
        const list = this.state.wishList.map((product) => {
            return <ProductCondensed product={product} key={product._id}/>
        });
        return (list);
    }

    render() {
        return (
            <div className="card">
                <div className="card-block"></div>
                <h4 className="card-title">Wish List</h4>
                <ul className="list-group">
                    {this.createWishList()}
                </ul>
            </div>
        );
    }
}

export default WishList;