import React, {useContext} from "react";
import {
    Row,
    Col,
} from "reactstrap";
import ProductCard from "../components/ProductCard";
import GlobalContext from "../GlobalContext";

const ProductList = (props) => {
    const { updateCart } = useContext(GlobalContext);
    
    const addToCart = (product) => {
        updateCart(product)
    }

    return (
        <Row className="py-4">
            {props.products.map((product, index) => (
                <Col md className="pb-4" key={product.code}>
                    <ProductCard product={product} updateCartClick={() => addToCart(product)}></ProductCard>
                </Col>

            ))}

        </Row >
    );

}

export default ProductList;