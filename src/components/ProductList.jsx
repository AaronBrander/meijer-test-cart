import React from "react";
import {
    Row,
    Col,
} from "reactstrap";
import ProductCard from "../components/ProductCard";

const ProductList = (props) => {

    return (
        <Row className="py-4">
            {props.products.map((product, index) => (
                <Col md className="pb-4" key={product.code}>
                    <ProductCard product={product}></ProductCard>
                </Col>

            ))}

        </Row >
    );

}

export default ProductList;