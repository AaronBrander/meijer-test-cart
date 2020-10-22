import React, {Component} from "react";
import {
    Row,
    Col,
    Button,
    Form,
    FormGroup,
    Input,
    Label,
} from "reactstrap";

import GlobalContext from "../GlobalContext";

class ProductCart extends Component {
    static contextType = GlobalContext;
    render() {
        return (

            <Form>
                <Row className="py-4 mt-4 border border-primary" noGutters>
                    <Col md className="pb-4">
                        <img src="https://www.meijer.com/content/dam/meijer/product/0000/00/0004/01/0000000004011_2_A1C1_1200.png" width="100px" alt="Banana" />
                    </Col>
                    <Col md className="pb-4">
                        <b>Product Name</b><br />
            sku
         </Col>
                    <Col md className="pb-4">
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

                    </Col>
                    <Col md className="pb-4">
                        <Button>Remove</Button>
                    </Col>
                </Row>
            </Form>


        );
    }
}

export default ProductCart;