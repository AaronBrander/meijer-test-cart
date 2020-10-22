import React, { Component } from "react";
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button,
    CardFooter
} from "reactstrap";
import GlobalContext from "../GlobalContext";

class ProductList extends Component {
    static contextType = GlobalContext;

    render() {
        console.log("test", this.context.isLoggedIn);
        return (
            <CardFooter>
                {this.context.isLoggedIn &&
                    <Form inline>
                        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                            <Label for="exampleSelect" className="mr-sm-2">Quantity</Label>
                            <Input type="select" name="select" id="Quantity">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                            </Input>
                        </FormGroup>

                        <Button>Add to Cart</Button>
                    </Form>
                }
                
                {!this.context.isLoggedIn &&
                    <p>You must login to add to your cart.</p>
                }
                
            </CardFooter>
        );

    }
}

export default ProductList;

