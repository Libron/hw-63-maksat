import React, {Component} from 'react';
import {CATEGORIES} from "../Constants";
import './ProductForm.css';

class ProductForm extends Component {
    state = {
        name: '',
        category: Object.keys(CATEGORIES)[0],
        description: '',
        image: '',
        price: 0,
    };

    valueChanged = event => {
        const {name, value} = event.target;
        this.setState({[name]: value});
    };

    submitHandler = event => {
       event.preventDefault();
       this.props.onSubmit({...this.state});
    };

    render() {
        return (
            <form className='ProductForm' onSubmit={this.submitHandler}>
                <select name='category' onChange={this.valueChanged} value={this.state.category}>
                    {Object.keys(CATEGORIES).map(categoryId => (
                        <option value={categoryId} key={categoryId}>{CATEGORIES[categoryId]}</option>
                    ))}
                </select>
                <input type='text' name='name' placeholder='Product Name' value={this.state.name}
                       onChange={this.valueChanged}/>
                <input type='url' name='image' placeholder='Product Image' value={this.state.image}
                       onChange={this.valueChanged}/>
                <textarea name='description' placeholder='Product Description' value={this.state.description}
                          onChange={this.valueChanged}/>
                <input type='number' name='price' placeholder='Product Price' value={this.state.price}
                       onChange={this.valueChanged}/>
                <button type='submit'>Save</button>
            </form>
        );
    }
}

export default ProductForm;