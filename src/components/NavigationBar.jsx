import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';
import logo from '../bsm.png';
import GlobalContext from "../GlobalContext";
import LoggedInNav from "../components/LoggedInNav";
import LoggedOutNav from "../components/LoggedOutNav";

class NavigationBar extends Component {
    static contextType = GlobalContext;
    constructor(props) {
        super(props);
        this.state = {
          collapsed: true,
        };
      }
    
      toggle = () => {
        this.setState({ collapsed: !this.state.collapsed });
      };
    
     render() {
        return (
            <Navbar color="dark" dark expand="md">
                <NavbarBrand onClick={() => this.props.history.push("/")}><img src={logo} alt="Bridge Street Market" /></NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.collapsed} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink onClick={() => this.props.history.push("/")}>Products</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink onClick={() => this.props.history.push("about-us")}>About Us</NavLink>
                        </NavItem>
                        
                    </Nav>
                    <Nav className="ml-auto" navbar>
                        {this.context.isLoggedIn && 
                        <LoggedInNav history={this.props.history} ></LoggedInNav>
                        
                        }
                        {!this.context.isLoggedIn && 
                          <LoggedOutNav history={this.props.history} ></LoggedOutNav>
                        }
                                              
                       
                    </Nav>
                </Collapse>
            </Navbar>
        );
        }
}

export default NavigationBar;