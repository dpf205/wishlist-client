import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import HttpService from '../services/http-service';
import Product from '../product/product';

const http = new HttpService();

class App extends Component {

    constructor(props) {
        super(props);

        // ES6 bind the function to the class to get access to the function
        this.loadData = this.loadData.bind(this);

        this.loadData();
    }
    loadData = () => {
        http.getProducts().then(products => {
            console.log(products);
        }, err => {

        });
    };

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2 className="App-title"> MERN Wishlist</h2>
                </div>
                <div className="App-main">
                    <Product/>
                </div>
            </div>
        );
    }
}

export default App;
