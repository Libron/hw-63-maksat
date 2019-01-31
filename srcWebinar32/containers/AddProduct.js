import React, {Component, Fragment} from 'react';
import ProductForm from "../components/ProductForm";
import axios from '../axios_shop.instances';





class AddProduct extends Component {
    addProduct = product => {
        axios.post('products.json', product).then(()=> {
            this.props.history.replace('/');
        });
    };
    render() {
        return (
            <Fragment>
                <h1>Add new product</h1>
                <ProductForm onSubmit={this.addProduct}/>
            </Fragment>
        );
    }
}

export default AddProduct;