import React from "react";
import axios from 'axios';
import ProductDetails from '../ProductDetail'

class ProductDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            price: '',
            color: '',
            category: '',
            image: '',
            description: '',
            showDetails: false,
            reader: null
        }
    }
    handleChange = (name, price, color, category, description) => event => {
        this.setState({
            [name]: event.target.value,
            [price]: event.target.value,
            [color]: event.target.value,
            [category]: event.target.value,
            [description]: event.target.value,

        });
    };
    handleChangeImage = () => event => {
        const file    = this.refs.uploadImg.files[0]
        const reader  = new FileReader();

        reader.onloadend = () => {
            this.setState({
                readers: reader.result
            })
        }
        if (file) {
            reader.readAsDataURL(file);
            this.setState({
                readers :reader.result
            })
        } 
        else {
            this.setState({
                readers: ""
            })
        }
        this.setState({ productImage: event.target.files[0],
     });
    }

    handleSubmit = () => event => {
        event.preventDefault();
        const formData = new FormData();
        formData.append(
            'productImage', this.state.productImage);
        formData.append(
            'name', this.state.name);
        formData.append(
            'price', this.state.price);
        formData.append(
            'color', this.state.color);
        formData.append(
            'category', this.state.color);
        formData.append(
            'description', this.state.color);

        // // use .env file 
        axios.post('https://mighty-mountain-56228.herokuapp.com/products', formData,
            {
                name: formData,
                price: formData,
                color: formData,
                category: formData,
                description: formData,

                productImage: formData
            })
            .then( (res) => {
                this.setState({
                    showDetails: true
                })
            })
            .catch(function (error) {
                console.log(error)
            })

    }

    render() {
        const {showDetails, name, price, category, color, productImage, description, readers} = this.state
        console.log(this.state.reader)
        return (
        
            <div className="w3-container w3-row w3-margin-bottom">
                    {showDetails === false ? 
                <div className="w3-card-4 w3-padding-large w3-padding-48 w3-round-xlarge w3-col s12 w3-white">
                    <div className="w3-row">
                        <div className="w3-col m12">
                            <div className="w3-container">
                                <h2>
                                    <i className="fa fa-plus" />Add Product
                                </h2>
                            </div>
                            <form className="w3-container" method="get" onSubmit={this.handleSubmit()}>
                                <div className="w3-row w3-row-padding">
                                    <div className="w3-col m6">
                                        <label>Product Name</label>
                                        <input className="w3-input" type="text" onChange={this.handleChange('name')} required/>
                                    </div>

                                    <div className="w3-col m6">
                                        <label>Product Price</label>
                                        <input className="w3-input" type="number" onChange={this.handleChange('price')} required/>
                                    </div>

                                    <div className="w3-col m6">
                                        <label>Product Category</label>
                                        <input className="w3-input" type="text" onChange={this.handleChange('category')} required/>
                                    </div>

                                    <div className="w3-col m6">
                                        <label>Product Color</label>
                                        <input className="w3-input" type="text" onChange={this.handleChange('color')} required/>
                                    </div>

                                    <div className="w3-col m12">
                                        <label>Product Description</label>
                                        <input className="w3-input" type="text" onChange={this.handleChange('description')} required/>
                                    </div>

                                    <div className="w3-col m12">
                                        <label>Upload Image</label>
                                        <input className="w3-input" type="file" onChange={this.handleChangeImage()} ref="uploadImg" required/>
                                    </div>

                                    <div className="w3-col m12">
                                        <br />
                                        <br />
                                        <button className="w3-button w3-red" type="submit">
                                            <i className="fa fa-plus" /> Add Product
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                : <ProductDetails name={name} price={price} color={color} description={description} image={readers} category={category} />}
            </div>
        );
    }
}

export default ProductDetail;
