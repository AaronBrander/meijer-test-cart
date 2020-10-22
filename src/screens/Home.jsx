import React, { Component } from "react";
import {
    Row,
    Col,
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
                <NavigationBar profile={this.context.profile}></NavigationBar>
                <ProductList products={this.context.products}></ProductList>

            </Container>
        );

    }

}

export default Home;