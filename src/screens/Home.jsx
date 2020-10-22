import React, { Component } from "react";
import {
   Container,
} from "reactstrap";
import NavigationBar from "../components/NavigationBar";
import ProductList from "../components/ProductList";

import GlobalContext from "../GlobalContext";

class Home extends Component {
    static contextType = GlobalContext;

    componentDidMount() {
        this.context.getProducts();
    }

    render() {
        return (
            <Container>
                <NavigationBar {...this.props.children.props}></NavigationBar>
                <ProductList products={this.context.products}></ProductList>

            </Container>
        );

    }

}

export default Home;