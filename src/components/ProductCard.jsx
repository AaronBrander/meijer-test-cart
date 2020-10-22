import React from "react";
import {
    Row,
    Col,
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
            <CardHeader>Product Name</CardHeader>
            <CardBody>
                <CardImg top width="100%" src="https://www.meijer.com/content/dam/meijer/product/0000/00/0004/01/0000000004011_2_A1C1_1200.png" alt="Product Name" />
                <CardText>
                    <Row>
                        <Col>$9.50</Col>
                        <Col>SKU value</Col>
                    </Row>
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