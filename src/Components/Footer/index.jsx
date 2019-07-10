import React from "react";

class Footer extends React.Component {

    state = {};

    componentDidMount() {

    }

    render() {
        return (
            <div className="w3-container w3-red w3-padding-16 w3-margin-top">
                <div className="w3-content">
                    <div className="w3-bar-item w3-button w3-hover-none w3-hover-text-white w3-right">
                        &copy; {new Date().getFullYear()}
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;
