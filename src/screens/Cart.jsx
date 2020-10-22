import React from "react";
import {
   Container,
} from "reactstrap";
import NavigationBar from "../components/NavigationBar";
import ProductCart from "../components/ProductCart";

const Cart = (props) => {

    return (
        <Container>
            <NavigationBar></NavigationBar>
            <ProductCart></ProductCart>
            <ProductCart></ProductCart>
            <ProductCart></ProductCart>
           
        </Container>
    );

}

export default Cart;