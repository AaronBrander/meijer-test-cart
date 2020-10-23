import React from 'react';
import PropTypes from 'prop-types';
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

LoggedOutNav.propTypes = 
{
    history: PropTypes.object, 
}

export default LoggedOutNav;