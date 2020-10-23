import React, {useContext} from "react";
import {
    Card,
    CardText,
    CardBody,
    CardHeader,
    CardImg,
    CardFooter,
    Button
} from "reactstrap";
import GlobalContext from "../GlobalContext";


const ProductCard = (props) => {
    const { isLoggedIn } = useContext(GlobalContext);
    console.log(props);
    return (
        <Card>
            <CardHeader><b>{props.product.name}</b></CardHeader>
            <CardBody>
                <CardImg top width="100%" src={props.product.image} alt={props.product.name}/>
                <CardText>
                    {props.product.price}
                </CardText>

            </CardBody>
             <CardFooter>
                {isLoggedIn &&
                    <Button onClick={props.updateCartClick}>Add to Cart</Button>
                    
                }
                
                {!isLoggedIn &&
                   <p>You must login to add to your cart.</p> 
                }
                
            </CardFooter>
        </Card>

    );

}

export default ProductCard;