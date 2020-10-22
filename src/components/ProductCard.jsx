import React from "react";
import {
    Card,
    CardText,
    CardBody,
    CardHeader,
    CardImg,
} from "reactstrap";
import ProductCardFooter from "../components/ProductCardFooter";

const ProductCard = (props) => {

    return (
        <Card>
            <CardHeader><b>{props.product.name}</b></CardHeader>
            <CardBody>
                <CardImg top width="100%" src={props.product.image} alt={props.product.name}/>
                <CardText>
                    {props.product.price}
                </CardText>

            </CardBody>
             <ProductCardFooter product={props.product}></ProductCardFooter>
            
        </Card>

    );

}

export default ProductCard;