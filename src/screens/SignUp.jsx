import React from "react";
import { Row, Col, Container } from "reactstrap";
import NavigationBar from "../components/NavigationBar";
const SignUp = (props) => {
   
        return (
           <Container>
               <NavigationBar></NavigationBar>
               <Row className="py-4">
                   <Col>
                   SignUp!
                   </Col>
               </Row>
           </Container>
        );
    
}

export default SignUp;