import React from "react";

const w3 = window.w3;

class Filter {
    constructor () {
        this.filters = [];
    }

    toggleFilter = (str) => {
        if (this.filters.includes(str)) {
            this.filters.splice(this.filters.indexOf(str), 1);
        } else {
            this.filters.push(str);
        }
    };

    filterProducts = (sel) => {
        let a, i, hit;
        a = document.querySelectorAll(sel);
        for (i = 0; i < a.length; i++) {
            hit = 0;
            // eslint-disable-next-line no-loop-func
            this.filters.forEach((filter) => {
                if (a[i].innerHTML.toUpperCase().indexOf(filter.toUpperCase()) > -1) {
                    hit = 1;
                }
            });

            if (hit === 1) {
                a[i].style.display = "";
            } else {
                if (this.filters.length > 0) {
                    a[i].style.display = "none";
                } else {
                    a[i].style.display = "";
                }
            }
        }
    };
}

class Sidebar extends React.Component {

    state = {};
    filterObject = new Filter();

    componentDidMount() {

    }

    // Add a "checked" symbol when clicking on a category item
    categoryClick(ev) {
        if (ev.target.tagName === "LI") {
            ev.target.classList.toggle("checked");
            this.filterObject.toggleFilter(ev.target.innerHTML);
        }
        this.filterObject.filterProducts(".productBox");
    };

    // Add a "checked" symbol when clicking on a colors item
    colorClick(ev) {
        if (ev.target.tagName === "LI") {
            ev.target.classList.toggle("checked");
            this.filterObject.toggleFilter(ev.target.innerHTML);
        }
        this.filterObject.filterProducts(".productBox");
    };

    render() {
        const {categories, colors} = this.props;
        const sidebarCategories = categories.length > 0
            ? categories.map((category, index) => <li key={index} onClick={event => this.categoryClick(event)}>{category}</li>)
            : null;
        const sidebarColors = colors.length > 0
            ? colors.map((color, index) => <li key={index} onClick={event => this.colorClick(event)}>{color}</li>)
            : null;

        return (
            <div>
                <div className="w3-quarter">
                    <p className="w3-large">
                        <i className="fa fa-filter"/> Filter Products
                    </p>
                    <button onClick={() => {w3.toggleClass('#sideNavCategories', 'w3-show')}}
                            className="w3-button w3-block w3-white w3-hover-none w3-text-red w3-left-align w3-large">
                        Categories&nbsp;<i className="fa fa-chevron-down"/>
                    </button>
                    <div id="sideNavCategories" className="w3-hide w3-container w3-animate-opacity">
                        <ul id="categories">
                            {sidebarCategories}
                        </ul>
                    </div>
                    <button onClick={() => {w3.toggleClass('#sideNavColors', 'w3-show')}}
                            className="w3-button w3-block w3-white w3-hover-none w3-text-red w3-left-align w3-large">
                        Colors&nbsp;<i className="fa fa-chevron-down"/>
                    </button>
                    <div id="sideNavColors" className="w3-hide w3-container w3-animate-opacity">
                        <ul id="colors">
                            {sidebarColors}
                        </ul>
                    </div>
                    <br/>
                    <br/>
                </div>
            </div>
        );
    }
}

export default Sidebar;
