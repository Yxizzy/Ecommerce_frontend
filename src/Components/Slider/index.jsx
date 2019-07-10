import React from "react";

const w3 = window.w3;

class Slider extends React.Component {

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
        let {slider} = this.state;
        slider.start();
        return (
            <div>
                <div className="w3-display-container w3-animate-zoom">
                    <img className="slider w3-animate-opacity" src={require("../../assets/images/1.jpg")} width="100%" alt="..."/>
                    <img className="slider w3-animate-opacity" src={require("../../assets/images/2.jpg")} width="100%" alt="..."/>
                    <img className="slider w3-animate-opacity" src={require("../../assets/images/3.jpg")} width="100%" alt="..."/>
                    <button
                        className="w3-button w3-transparent w3-xxlarge w3-display-left w3-text-white w3-hover-text-red w3-hover-none"
                        onClick={() => {slider.next()}}
                    >
                        <i className="fa fa-chevron-left"/>
                    </button>
                    <button
                        className="w3-button w3-transparent w3-xxlarge w3-display-right w3-text-white w3-hover-text-red w3-hover-none"
                        onClick={() => {slider.previous()}}
                    >
                        <i className="fa fa-chevron-right"/>
                    </button>
                </div>
            </div>
        );
    }
}

export default Slider;
