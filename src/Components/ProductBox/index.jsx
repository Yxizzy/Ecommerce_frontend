import React from "react";
import {Link} from "react-router-dom";

class ProductBox extends React.Component {

    state = {};

    componentDidMount() {

    }

    render() {
        const {products} = this.props;

        const boxes = products.length > 0
            ? products.map((product, index) => (
                <div key={index} className="w3-container w3-col l4 m6 mobile w3-margin-bottom productBox">
                    <p hidden>{product.category}</p>
                    <p hidden>{product.color}</p>
                    <div className="w3-card w3-padding w3-round">
                        <img src={product.image} alt="..." width="100%"/>
                        <br/>
                        <h6 className="w3-center w3-hover-text-red">
                            <Link className="w3-button w3-hover-none" to={"/product/" + product._id}>
                                <strong>{product.name}</strong>
                            </Link>
                        </h6>
                        <div className="w3-display-container w3-padding-small w3-margin-bottom">
                            <strong className="w3-display-left w3-text-red w3-small">$ {product.price}</strong>
                            <Link to={"/product/" + product._id} className="w3-btn w3-round-xxlarge w3-red w3-display-right w3-small">
                                <i className="fa fa-shopping-cart" /> Buy
                            </Link>
                        </div>
                    </div>
                </div>
            ))
            : null;

        return (
            <div id="productBox">
                {boxes}
            </div>
        );
    }
}

export default ProductBox;
