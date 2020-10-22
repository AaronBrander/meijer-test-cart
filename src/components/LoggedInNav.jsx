import React, { Component } from 'react';
import {
    Nav,
    NavItem,
    NavLink,
    NavbarText,
} from 'reactstrap';
import GlobalContext from "../GlobalContext";

class LoggedInNav extends Component {
    static contextType = GlobalContext;

    render() {
        return (

            <Nav className="ml-auto" navbar>

                <NavItem>
                    <NavbarText>Welcome {this.context.profile.firstName}!</NavbarText>
                </NavItem>
                <NavItem>
                    <NavLink href="/cart">Cart</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/" onClick={this.context.signOut}>Sign Out</NavLink>
                </NavItem>
            </Nav>

        );
    }
}

export default LoggedInNav;