import React from "react";
import { Row, Col, Container } from "reactstrap";
import NavigationBar from "../components/NavigationBar";
const Home = (props) => {
   
        return (
           <Container>
               <NavigationBar></NavigationBar>
               <Row className="py-4">
                   <Col>
                   Home!
                   </Col>
               </Row>
           </Container>
        );
    
}

export default Home;