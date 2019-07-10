import React from "react";
import Sidebar from "../Sidebar";
import ProductBox from "../ProductBox";
import Slider from "../Slider";

class Products extends React.Component {

    state = {
        products: [
            {
                name: "Product 1 Name",
                description: "Product 1 detail description for users to see on detail page.",
                price: 200,
                category: "Generic",
                image: require('../../assets/images/suit-2.jpg'),
                color: "Gray",
                _id: 0,
            },
            {
                name: "Product 2 Name",
                description: "Product 2 detail description for users to see on detail page.",
                price: 200,
                category: "Men",
                image: require('../../assets/images/suit-1.jpg'),
                color: "Blue",
                _id: 1,
            },
            {
                name: "Product 3 Name",
                description: "Product 3 detail description for users to see on detail page.",
                price: 200,
                category: "Women",
                image: require('../../assets/images/product1.jpg'),
                color: "Pink",
                _id: 2,
            }
        ],
    };

    componentDidMount() {

    }

    getCategories() {
        return this.state.products.map(product => product.category);
    }

    getColors() {
        return this.state.products.map(product => product.color);
    }

    render() {
        let {products} = this.state;
        const {match} = this.props;
        let headerText = 'Product Listing';

        if (match.params.str) {
            const {str} = match.params;
            headerText = 'Search Result: "' + str + '"';
            products = products.filter(product => {
                if (product.name.toLowerCase().includes(str.toLowerCase())) return true;
                if (product.description.toLowerCase().includes(str.toLowerCase())) return true;
                if (product.color.toLowerCase().includes(str.toLowerCase())) return true;
                return product.category.toLowerCase().includes(str.toLowerCase());

            });
        }

        return (
            <div>
                <Slider/>
                <div className="w3-container w3-margin-bottom">
                    <div className="w3-content">
                        <br />
                        <p className="w3-xxlarge">{headerText}</p>
                        <div className="w3-row-padding">
                            <Sidebar categories={this.getCategories()} colors={this.getColors()}/>
                            <div className="w3-threequarter">
                                <div className="w3-row">
                                    <ProductBox products={products}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Products;
