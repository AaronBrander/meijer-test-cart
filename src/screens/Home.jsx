import React from "react";
import {
    Row,
    Col,
    Container,
} from "reactstrap";
import NavigationBar from "../components/NavigationBar";
import ProductCard from "../components/ProductCard";

const Home = (props) => {

    return (
        <Container>
            <NavigationBar></NavigationBar>
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

export default Home;