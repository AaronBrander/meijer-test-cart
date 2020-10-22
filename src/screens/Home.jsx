import React, { Component, Fragment } from "react";
import ProductList from "../components/ProductList";

import GlobalContext from "../GlobalContext";

class Home extends Component {
    static contextType = GlobalContext;
    componentDidMount() {
        this.context.getProducts();
    }

    render() {
        return (
            <Fragment>
                <ProductList products={this.context.products}></ProductList>
            </Fragment>
        );

    }

}

export default Home;