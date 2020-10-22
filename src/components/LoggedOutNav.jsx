import React from 'react';
import {
    Nav,
    NavItem,
    NavLink,
    NavbarText,
} from 'reactstrap';


const LoggedOutNav = (props) => {
    return (
        
        <Nav className="ml-auto" navbar>

            <NavItem>
                <NavbarText>Welcome stranger!</NavbarText>
            </NavItem>
            <NavItem>
                <NavLink onClick={() => props.history.push("login")} >Sign In</NavLink>
            </NavItem>
        </Nav>

    );
}

export default LoggedOutNav;