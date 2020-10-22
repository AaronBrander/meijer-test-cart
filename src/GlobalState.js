import React, { Component } from "react";
import GlobalContext from "./GlobalContext";
import API from "./API";
import { useHistory } from 'react-router-dom';

class GlobalState extends Component {
  state = {
    profile: {},
    isLoggedIn: false,
    products: [],
    cart: [],
  };

  getProducts = () => {
    API.get().then((response) => {
      this.setState({ products: response });
    });
  };

  updateProfile = (profile) => {
    this.setState({ profile: profile });
  };
  updateCart = (cart) => {
    this.setState({ cart: cart });
  };
  
  signOut = () => {
    this.setState({ profile: {}, isLoggedIn: false});
  }
  
  signIn = () =>
  {
    this.setState({ profile: { firstName: "Test", lastName: "User"}, isLoggedIn: true});
  }

  render() {
    return (
      <GlobalContext.Provider
        value={{
          profile: this.state.profile,
          isLoggedIn: this.state.isLoggedIn,
          products: this.state.products,
          cart: this.state.cart,
          getProducts: this.getProducts,
          updateProfile: this.updateProfile,
          updateCart: this.updateCart,
          signOut: this.signOut,
          signIn: this.signIn
        }}
      >
        {this.props.children}
      </GlobalContext.Provider>
    );
  }
}

export default GlobalState;