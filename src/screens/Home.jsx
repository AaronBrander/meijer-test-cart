import React, { Component } from "react";
import {
    Row,
    Col,
    Container,
} from "reactstrap";
import NavigationBar from "../components/NavigationBar";
import ProductCard from "../components/ProductCard";

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
                <Row className="py-4">
                    <Col md className="pb-4">
                       <ProductCard></ProductCard>
                    </Col>
                    <Col md className="pb-4">
                       <ProductCard></ProductCard>
                    </Col>
                    <Col md className="pb-4">
                       <ProductCard></ProductCard>
                    </Col>
                </Row>
            </Container>
        );
    
    }
    
}

export default Home;