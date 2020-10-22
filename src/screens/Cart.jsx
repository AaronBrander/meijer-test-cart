import React from "react";
import {
   Container,
} from "reactstrap";
import ProductCart from "../components/ProductCart";

const Cart = (props) => {

    return (
        <Container>
            <ProductCart></ProductCart>
            <ProductCart></ProductCart>
            <ProductCart></ProductCart>
           
        </Container>
    );

}

export default Cart;