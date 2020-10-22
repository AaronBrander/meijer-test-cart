import React from "react";
import { Row, Col, Container } from "reactstrap";
import NavigationBar from "../components/NavigationBar";
const Cart = (props) => {
   
        return (
           <Container>
               <NavigationBar></NavigationBar>
               <Row className="py-4">
                   <Col>
                   Cart!
                   </Col>
               </Row>
           </Container>
        );
    
}

export default Cart;