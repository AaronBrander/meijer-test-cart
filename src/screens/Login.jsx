import React, {Component} from "react";
import {
    Row,
    Col,
    Container,
    Form,
    FormGroup,
    Label,
    Input,
    
} from "reactstrap";
import {Link} from "react-router-dom";
import NavigationBar from "../components/NavigationBar";
import GlobalContext from "../GlobalContext";


class Login extends Component {
    static contextType = GlobalContext;
    render() {
        return (
            <Container>
                <NavigationBar {...this.props.children.props}></NavigationBar>
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
                            <Link to="/" onClick={this.context.signIn} class="btn btn-primary">Submit</Link>
                        </Form>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>Don't have an account yet? <a href="/sign-up" >Sign up</a> for a free one!</p>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Login;