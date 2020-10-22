import React, { Component } from "react";
import NavigationBar from "./components/NavigationBar";
import {
  Container,
} from "reactstrap";
class Layout extends Component {
  render() {
    return (
      <Container>
        <NavigationBar {...this.props.children.props} />
        {this.props.children}
      </Container>
    );
  }
}

export default Layout;