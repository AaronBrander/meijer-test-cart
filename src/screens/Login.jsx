import React from "react";
import {
    Row,
    Col,
    Container,
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from "reactstrap";
import NavigationBar from "../components/NavigationBar";
const Login = (props) => {

    return (
        <Container>
            <NavigationBar></NavigationBar>
            <Row className="py-4">
                <Col>
                    <Form inline>
                        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                            <Label for="exampleEmail" className="mr-sm-2">Email</Label>
                            <Input type="email" name="email" id="exampleEmail" placeholder="something@idk.cool" />
                        </FormGroup>
                        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                            <Label for="examplePassword" className="mr-sm-2">Password</Label>
                            <Input type="password" name="password" id="examplePassword" placeholder="don't tell!" />
                        </FormGroup>
                        <Button>Submit</Button>
                    </Form>
                </Col>
            </Row>
            <Row>
                <Col>
                <p>Don't have an account yet? <a href="/sign-up">Sign up</a> for a free one!</p>
                </Col>
            </Row>
        </Container>
    );

}

export default Login;