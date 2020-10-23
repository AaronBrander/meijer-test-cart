import React, { useContext } from "react";
import NavigationBar from "./components/NavigationBar";
import {
  Container,
  Alert
} from "reactstrap";
import GlobalContext from "./GlobalContext";

export const Layout = (props) => {
  const {showAlert, setShowAlert} = useContext(GlobalContext);
  const {alertMessage, setAlertMessage} = useContext(GlobalContext);
console.log(showAlert, 'alert');

  const dismissAlert = () => {
    setShowAlert(false);
    setAlertMessage('');
  }


  return (
    <Container>
      <NavigationBar {...props.children.props} />
      <Alert color="primary" isOpen={showAlert} toggle={dismissAlert}>
        {alertMessage}
      </Alert>
      {props.children}
    </Container>
  );
}

export default Layout;