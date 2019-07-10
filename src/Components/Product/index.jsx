import React from "react";
import ProductDetail from "../ProductDetail";

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

    render() {
        const {products} = this.state;
        const {match} = this.props;
        return (
            <div className="w3-container" style={{backgroundColor: "#efefef"}}>
                <div className="w3-content">
                    <div className="w3-row-padding">
                        <div className="w3-row">
                            <div className="w3-col s12">
                                <br />
                                <ProductDetail product={products[match.params.id]} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Products;
