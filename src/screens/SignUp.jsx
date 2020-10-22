import React, {Fragment} from "react";
import {
    Row,
    Col,
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from "reactstrap";
import {Link} from "react-router-dom";
const SignUp = (props) => {

    return (
        <Fragment>
            <Row className="py-4">
                <Col>
                    <Form>
                        <Row form>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="firstName">First Name</Label>
                                    <Input type="text" name="firstName" id="firstName" placeholder="First Name" />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="lastName">Last Name</Label>
                                    <Input type="text" name="lastName" id="lastName" placeholder="last name" />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row form>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="exampleEmail">Email</Label>
                                    <Input type="email" name="email" id="exampleEmail" placeholder="this will be your login" />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="examplePassword">Password</Label>
                                    <Input type="password" name="password" id="examplePassword" placeholder="use a strong password!" />
                                </FormGroup>
                            </Col>
                        </Row>
                        <FormGroup>
                            <Label for="exampleAddress">Address</Label>
                            <Input type="text" name="address" id="exampleAddress" placeholder="1234 Main St" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleAddress2">Address 2</Label>
                            <Input type="text" name="address2" id="exampleAddress2" placeholder="Apartment, studio, or floor" />
                        </FormGroup>
                        <Row form>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="exampleCity">City</Label>
                                    <Input type="text" name="city" id="exampleCity" />
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <Label for="exampleState">State</Label>
                                    <Input type="text" name="state" id="exampleState" />
                                </FormGroup>
                            </Col>
                            <Col md={2}>
                                <FormGroup>
                                    <Label for="exampleZip">Zip</Label>
                                    <Input type="text" name="zip" id="exampleZip" />
                                </FormGroup>
                            </Col>
                        </Row>

                        <Button>Sign up</Button>
                    </Form>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>Already have an account? <Link to="/login">Login</Link>!</p>
                </Col>
            </Row>
        </Fragment>
    );

}

export default SignUp;