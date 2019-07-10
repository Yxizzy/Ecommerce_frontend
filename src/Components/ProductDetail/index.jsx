import React from "react";

const w3 = window.w3;

class ProductDetails extends React.Component {

    state = {
        slider: {
            start: () => {},
        },
    };

    componentDidMount() {
        setTimeout(() => {
            this.setState({slider: w3.slideshow(".slider", 5000)});
        }, 500);
    }

    render() {
        const {slider} = this.state;
        console.log(this.props)
        const {name, price, description, image, color, category} = this.props;
        slider.start();

        return (
            <div className="w3-container w3-row w3-margin-bottom">
                <div className="w3-card-4 w3-padding-large w3-padding-48 w3-round-xlarge w3-col s12 w3-white">
                    <div className="w3-row">
                        <div className="w3-col m6">
                            <div className="w3-display-container w3-animate-zoom">
                                <img className="slider w3-animate-opacity" src={image} width="100%" alt="..."/>
                                <button className="w3-button w3-transparent w3-xxlarge w3-display-left w3-text-red w3-hover-none"
                                    onClick={() => {slider.previous()}}>
                                    <i className="fa fa-chevron-left"/>
                                </button>
                                <button className="w3-button w3-transparent w3-xxlarge w3-display-right w3-text-red w3-hover-none"
                                    onClick={() => {slider.next()}}>
                                    <i className="fa fa-chevron-right"/>
                                </button>
                            </div>
                            <br/>
                            <br/>
                            <div className="w3-row-padding w3-section w3-hide-small">
                                <div className="w3-col s2">
                                    <img className="w3-opacity w3-hover-opacity-off"
                                         src={image}
                                         style={{width: "100%", cursor: "pointer"}}
                                         onClick={() => {slider.display(1)}}
                                         alt="..."/>
                                </div>
                            </div>
                        </div>
                        <div className="w3-col m6">
                            <h2 className="w3-text-red">{name}</h2>
                            <h4 className="w3-text-red">Price: $ {price}</h4>
                            <h5>Category: {category}</h5>
                            <h5>Color: {color}</h5>
                            <hr/>
                            <p className="w3-text-red">
                                <strong>Product Description:</strong>
                            </p>
                            <p className="w3-large">{description}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductDetails;
