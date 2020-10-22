import React from "react";
import { Row, Col, Container } from "reactstrap";
import NavigationBar from "../components/NavigationBar";
const Login = (props) => {
   
        return (
           <Container>
               <NavigationBar></NavigationBar>
               <Row className="py-4">
                   <Col>
                   Login!
                   </Col>
               </Row>
           </Container>
        );
    
}

export default Login;