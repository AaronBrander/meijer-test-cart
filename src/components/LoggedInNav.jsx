import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    Nav,
    NavItem,
    NavLink,
    NavbarText,
} from 'reactstrap';
import GlobalContext from "../GlobalContext";

class LoggedInNav extends Component {
    static contextType = GlobalContext;

    signout = () => {
        this.context.signOut();
        this.props.history.push("/");
    }
    render() {
        return (

            <Nav className="ml-auto" navbar>

                <NavItem>
                    <NavbarText>Welcome {this.context.profile.firstName}!</NavbarText>
                </NavItem>
                <NavItem>
                    <NavLink onClick={() => this.props.history.push("cart")}>Cart</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink onClick={() => this.signout()}>Sign Out</NavLink>
                </NavItem>
            </Nav>

        );
    }
}
LoggedInNav.propTypes = 
{
    history: PropTypes.object, 
}
export default LoggedInNav;