import React from "react";
import {Redirect, Link} from "react-router-dom";

const w3 = window.w3;

class Header extends React.Component {

    state = {
        isSearch: false,
    };

    componentDidMount() {

    }

    search = (ev) => {
        ev.preventDefault();
        const value = ev.nativeEvent.target[1].value;
        this.setState({isSearch: value});
    };

    render() {
        const {isSearch} = this.state;

        return (
            <div>
                {isSearch ? <Redirect to={"/search/" + isSearch} /> : null}
                <div className="w3-bar w3-red w3-padding-large w3-card">
                    <div className="w3-content">
                        <a href="javascript:void(0)" className="w3-bar-item w3-button w3-hover-none w3-hide-large w3-hide-medium"
                           onClick={() => {w3.toggleClass('#mobileNav', 'w3-show')}}
                        >
                            <i className="fa fa-bars"/>
                        </a>
                        <Link to="/" className="w3-bar-item w3-button w3-hover-none">Product Demo</Link>
                        <form method="get" onSubmit={this.search}>
                            <button type="submit"
                                    className="w3-bar-item w3-button w3-hover-none w3-right w3-hide-small">
                                <i className="fa fa-search"/>
                            </button>
                            <input type="search" name="search"
                                   className="w3-bar-item w3-input w3-round-medium w3-margin-right w3-margin-left w3-right w3-medium w3-hide-small"
                                   placeholder="Search..."/>
                        </form>
                        <Link to="/add" className="w3-bar-item w3-button w3-hover-none w3-hide-small w3-right">
                            <i className="fa fa-plus" /> Add Product
                        </Link>
                        <Link to="/" className="w3-bar-item w3-button w3-hover-none w3-hide-small w3-right">Products</Link>
                    </div>
                </div>
                <div id="mobileNav" className="w3-bar-block w3-pale-red w3-hide w3-hide-large w3-hide-medium">
                    <form method="get" onSubmit={this.search}>
                        <input type="search" name="search"
                               className="w3-bar-item w3-input w3-round-medium w3-margin-top w3-medium"
                               placeholder="Search..."/>
                    </form>
                    <Link to="/" className="w3-bar-item w3-button w3-hover-white">Products</Link>
                    <Link to="/add" className="w3-bar-item w3-button w3-hover-white">
                        <i className="fa fa-plus" /> Add Product
                    </Link>
                </div>
            </div>
        );
    }
}

export default Header;
