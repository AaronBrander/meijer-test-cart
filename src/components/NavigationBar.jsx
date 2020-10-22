import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText,
} from 'reactstrap';
import logo from '../bsm.png';


const NavigationBar = (props) => {
    const [isOpen, setIsOpen] = useState(false);

     const toggle = () => setIsOpen(!isOpen);
    
        return (
            <Navbar color="dark" dark expand="md">
                <NavbarBrand href="/"><img src={logo} alt="Bridge Street Market" /></NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="/">Products</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/about-us">About Us</NavLink>
                        </NavItem>
                    </Nav>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavbarText>Welcome!</NavbarText>
                        </NavItem>
                        <NavItem>
                        <NavLink href="/cart">Cart</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        );
    
}

export default NavigationBar;