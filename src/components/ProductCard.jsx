import React from "react";
import {
    Button,
    Card,
    CardText,
    CardBody,
    CardHeader,
    CardImg,
    CardFooter,
    Form,
    FormGroup,
    Input,
    Label,
} from "reactstrap";

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
            <CardFooter>
                <Form inline>
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Label for="exampleSelect" className="mr-sm-2">Quantity</Label>
                        <Input type="select" name="select" id="Quantity">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Input>
                    </FormGroup>

                    <Button>Add to Cart</Button>
                </Form>
            </CardFooter>
        </Card>

    );

}

export default ProductCard;