import React, { useContext, Fragment } from "react";
import {
    Row,
    Col,
    Table,
    Jumbotron,
    Button
} from "reactstrap";
import { Link } from "react-router-dom";
import GlobalContext from "../GlobalContext";

const Cart = (props) => {
    const { cart, updateCart } = useContext(GlobalContext);
    var total = cart.reduce((a, b) => a + (b["lineTotal"] || 0), 0);
    return (
        <Fragment>
            {(cart && cart.length > 0) &&
                <Row className="pt-4">
                    <Col>
                        <h2>Your Cart</h2>
                        <Table responsive>
                            <thead>
                                <tr>
                                <th>Delete</th>
                                <th>&nbsp;</th>
                                <th>Product</th>
                                <th>Quantity</th>
                                <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.map((item, index) => (
                                    <tr key={item.code}>
                                        <td>
                                            <Button onClick={() => updateCart(item, 0)}>Delete</Button>
                                        </td>
                                        <td>
                                            <img width="100px" src={item.image} alt={item.name} />
                                        </td>
                                        <td>{item.name}</td>
                                        <td>{item.quantity}</td>
                                        <td>${item.lineTotal}</td>

                                    </tr>
                                ))}
                                <tr>
                                    <td colSpan="4">
                                        &nbsp;
                                    </td>
                                    <td><b>${total}</b></td>

                                </tr>
                            </tbody>
                        </Table>
                    </Col>

                </Row>
            }
            {(!cart || cart.length === 0) &&
                <Jumbotron><h2>Your cart is empty.</h2>
                    <p>Try adding some <Link to="/">products.</Link> </p>
                </Jumbotron>
            }
        </Fragment>
    );

}

export default Cart;